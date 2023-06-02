const mysql = require('mysql2');
const readline = require('readline');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create a menu prompt
function showMenu() {
  console.log('\nMenu:');
  console.log('1. Get Capital after entering country');
  console.log('2. Get distinct languages by region');
  console.log('3. Get number of cities that speak a language');
  console.log('4. Get language count by continent');
  console.log('5. Check official language and continent');
  console.log('0. Exit');

  rl.question('Select a question (0-5): ', (choice) => {
    switch (choice) {
      case '0':
        exitApp();
        break;
      case '1':
        getCapitalCity();
        break;
      case '2':
        getLanguage();
        break;
      case '3':
        getCityCountByLanguage();
        break;
      case '4':
        getLanguageCountByContinent();
        break;
      case '5':
        getCountriesSame();
        break;
      default:
        console.log('Invalid choice. Please try again.\n');
        showMenu();
        break;
    }
  });
}

// Handle app exit
function exitApp() {
  console.log('Exiting...');
  connection.end();
  rl.close();
}

// 1. Get Capital after entering country
function getCapitalCity() {
  rl.question('Enter country name to get capital name: ', (countryName) => {
    const query = 'SELECT city.name AS city_name FROM city INNER JOIN country ON city.ID = country.Capital WHERE country.Name = ?';
    connection.prepare(query, (err, statement) => {
      if (err) {
        console.error('Failed to prepare statement:', err);
        return;
      }

      statement.execute([countryName], (err, rows) => {
        if (err) {
          console.error('Failed to execute statement:', err);
          statement.close();
          showMenu();
          return;
        }

        if (rows.length > 0) {
          const capitalCity = rows[0].city_name;
          console.log('Capital City:', capitalCity);
        } else {
          console.log('No capital city found for the specified country.');
        }

        statement.close();
        showMenu();
      });
    });
  });
}

// 2. Get languages by region

function getLanguage() {
  rl.question('Enter region name to get distinct languages: ', (regionName) => {
    const query = 'SELECT DISTINCT language AS language FROM countrylanguage INNER JOIN country ON country.Code = countrylanguage.CountryCode WHERE country.Region = ?';
    connection.prepare(query, (err, statement) => {
      if (err) {
        console.error('Failed to prepare statement:', err);
        return;
      }

      statement.execute([regionName], (err, rows) => {
        if (err) {
          console.error('Failed to execute statement:', err);
          statement.close();
          showMenu();
          return;
        }

        if (rows.length > 0) {
          console.log('Distinct languages in the selected region:');
          rows.forEach((row) => {
            console.log(row.language);
          });
        } else {
          console.log('No languages found for the specified region.');
        }

        statement.close();
        showMenu();
      });
    });
  });
}


// 3. Find the number of cities that speak language Z
function getCityCountByLanguage() {
  rl.question('Enter language to get number of cities that speak this language: ', (languageCode) => {
    const query = 'SELECT COUNT(DISTINCT city.Name) AS city_count FROM countrylanguage JOIN city ON countrylanguage.CountryCode = city.CountryCode WHERE countrylanguage.Language = ?';

    connection.prepare(query, (err, statement) => {
      if (err) {
        console.error('Failed to prepare statement:', err);
        showMenu();
        return;
      }

      statement.execute([languageCode], (err, rows) => {
        if (err) {
          console.error('Failed to execute statement:', err);
          statement.close();
          showMenu();
          return;
        }

        const cityCount = rows[0].city_count;
        console.log('Number of cities where selected language is spoken:', cityCount);

        statement.close();
        showMenu();
      });
    });
  });
}

// 4. Get language count by continent
function getLanguageCountByContinent() {
  const query = `
    SELECT country.Continent, COUNT(DISTINCT countrylanguage.Language) AS language_count
    FROM country
    JOIN countrylanguage ON country.Code = countrylanguage.CountryCode
    GROUP BY country.Continent
  `;

  connection.prepare(query, (err, statement) => {
    if (err) {
      console.error('Failed to prepare statement:', err);
      return;
    }

    statement.execute((err, results) => {
      statement.close();

      if (err) {
        console.error('Failed to fetch language count by continent:', err);
        showMenu();
        return;
      }

      console.log('Languages by continent:');
      results.forEach((row) => {
        console.log(`Continent: ${row.Continent}, Number of languages spoken: ${row.language_count}`);
      });

      showMenu();
    });
  });
}

// 5. Check official language and continent
function getCountriesSame() {
  rl.question('Enter a country name: ', (countryName) => {
    const query = `
    SELECT DISTINCT c2.Name AS CountryWithSameLanguage
    FROM country AS c1
    JOIN country AS c2 ON c1.Code <> c2.Code
    JOIN countrylanguage AS cl1 ON c1.Code = cl1.CountryCode AND cl1.IsOfficial = "T"
    JOIN countrylanguage AS cl2 ON c2.Code = cl2.CountryCode AND cl2.IsOfficial = "T"
    WHERE c1.Name = ? AND c1.Continent = c2.Continent AND cl1.Language = cl2.Language`;

    connection.prepare(query, (err, statement) => {
      if (err) {
        console.error('Failed to prepare statement:', err);
        showMenu();
        return;
      }

      statement.execute([countryName], (err, results) => {
        if (err) {
          console.error('Failed to execute statement:', err);
          statement.close();
          showMenu();
          return;
        }

        if (results.length > 0) {
          console.log('Countries with the same official language and in the same continent:');
          results.forEach((row) => {
            console.log(row.CountryWithSameLanguage);
          });
        } else {
          console.log('No matching countries found.');
        }

        statement.close();
        showMenu();
      });
    });
  });
}

showMenu();
