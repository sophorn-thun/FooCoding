# CLI Tool for API Interaction

This is a simple command-line interface (CLI) tool for interacting with an REST API. It allows you to perform different CRUD operations on users and posts data files.

## Installation

1. Clone the repository.
2. Go to this repository's directory.
3. Install the dependencies by running `npm install`.

### Dependencies

The following dependencies are required for this project:

- axios: ^0.21.1
- parse-args: ^1.0.0

To install these dependencies, navigate to the project directory and run `npm install`.

## How to use
- On terminal, run: ``` node api-cli.js `[options]` ```

Replace `[options]` with the appropriate command-line options described below.

### Command-line Options

- `--resource <type>`: Specifies the resource type. Valid options are `users` and `posts`.
- `--method <type>`: Specifies the HTTP method. Valid options are `get`, `post`, `patch`, and `delete`.
- `--all`: Used with the `get` method to retrieve all resources of the specified type.
- `--id <value>`: Specifies the ID of the resource to perform the operation on.
- `--help`: Displays the help information.

### Examples

- To get all users: ``` node api-cli.js --resource users --method get --all ```
- To get a specific user by ID: ``` node api-cli.js --resource users --method get --all ```
- To get help: ``` node api-cli.js --help ```

### Note

- Make sure to replace <user_id> and <post_id> with the actual ID values.
- If no options are provided, the CLI will prompt you to choose the resource type and method interactively.




