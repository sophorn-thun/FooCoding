{
  'use strict';
  
  document.addEventListener('DOMContentLoaded', function () {
    
    const bookTitles = [
      'a_thousand_splendid_sun',
      'britt_marie_was_here',
      'the_secret_life_of_bees',
      'pachinko',
      'the_book_thief',
      'the_secret_history',
      'vab_och_semlor',
      'kim_jiyoung',
      'unga_kvinnor',
      'hund_kursen'
    ];

    const bookCover = {
      a_thousand_splendid_sun: './images/book1.jpg',
      britt_marie_was_here: './images/book2.jpg',
      the_secret_life_of_bees: './images/book3.jpg',
      pachinko: './images/book4.jpg',
      the_book_thief: './images/book5.jpg',
      the_secret_history: './images/book6.jpg',
      vab_och_semlor: './images/book7.jpg',
      kim_jiyoung: './images/book8.jpg',
      unga_kvinnor: './images/book9.jpg',
      hund_kursen: './images/book10.jpg'
    };

    const bookListFull = {
      a_thousand_splendid_sun: {
        title: 'A Thousand Splendid Suns',
        language: 'English',
        author: 'Khaled Hosseini',
        year: 2007,
        genre: 'Fiction',
      },
      britt_marie_was_here: {
        title: 'Britt-Marie Was Here',
        author: 'Fredrik Backman',
        language: 'English',
        year: 2014,
        genre: 'Fiction',
      },
      the_secret_life_of_bees: {
        title: 'The Secret Life of Bees',
        language: 'English',
        author: 'Sue Monk Kidd',
        year: 2002,
        genre: 'Fiction',
      },
      pachinko: {
        title: 'Pachinko',
        language: 'English',
        author: 'Min Jin Lee',
        year: 2017,
        genre: 'Historical Fiction',
      },
      the_book_thief: {
        title: 'The Book Thief',
        language: 'English',
        author: 'Markus Zusak',
        year: 2005,
        genre: 'Historical Fiction',
      },
      the_secret_history: {
        title: 'The Secret History',
        language: 'English',
        author: 'Donna Tartt',
        year: 1992,
        genre: 'Fiction',
      },
      vab_och_semlor: {
        title: 'Vab och Semlor',
        language: 'Swedish',
        author: 'Sofie Berthet',
        year: 2022,
        genre: 'Fiction',
      },
      kim_jiyoung: {
        title: 'Kim Jiyoung, Born 1982',
        language: 'English',
        author: 'Cho Nam-Joo',
        year: 2016,
        genre: 'Fiction',
      },
      unga_kvinnor: {
        title: 'Unga Kvinnor',
        language: 'Swedish',
        author: 'Louisa May Alcott',
        year: 1868,
        genre: 'Fiction',
      },
      hund_kursen: {
        title: 'Hundkursen',
        language: 'Swedish',
        author: 'Anna Hansson and Erica Jacobson',
        year: 2022,
        genre: 'Fiction',
      }
    };

    const body = document.body;
    const h1 = document.createElement('h1');
    h1.innerText = "10 books Sophorn have read";
    body.appendChild(h1);

    function bookListGenerator(arr) {
      const bookList = document.createElement('ul');
      for (let i = 0; i < arr.length; i++) {
        const eachBook = document.createElement('li');
        eachBook.innerText = `Title: ${arr[i]}`;
        bookList.appendChild(eachBook);
      };
      return bookList;
    }

    const bookListTitle = bookListGenerator(bookTitles);
    // document.body.append(bookListTitle);

    function bookListObj(arr, obj) {
      const bookList = document.createElement('ul');
  
      for (i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.setAttribute('class', arr[i]);
        const eachBook = obj[arr[i]];
        let header = document.createElement('h2');
        let headerTitle = document.createTextNode(eachBook.title);
        li.appendChild(header);
        header.appendChild(headerTitle);
  
        const infoParagraph = document.createElement('p');
        const authorPara = document.createTextNode(`Author: ${eachBook.author}`);
        const languagePara = document.createTextNode(`Language: ${eachBook.language}`);
        const yearPara = document.createTextNode(`Year: ${eachBook.year}`);
      
        const br1 = document.createElement('br');
        const br2 = document.createElement('br');


        infoParagraph.appendChild(authorPara);
        infoParagraph.appendChild(br1);
        infoParagraph.appendChild(languagePara);
        infoParagraph.appendChild(br2);
        infoParagraph.appendChild(yearPara);
        li.appendChild(infoParagraph);
        bookList.appendChild(li);
      
        bookCoverAdded(arr[i], li, bookCover, bookListFull);
      }
      return bookList;
    }
  
    let bookInformation = bookListObj(bookTitles, bookListFull);
    document.body.appendChild(bookInformation);
  
    function bookCoverAdded(key, li, obj1) {
      let keyAccess = obj1[key];
      let img = document.createElement('img');
      img.src = keyAccess;

      li.appendChild(img);
    };

  });
  
};




