<p align="center">
    <a href="https://luistoro.co.uk">
        <img src="{{ asset('logo.svg') }}" alt="Company Logo">
    </a>
</p>

## Overview

This project aims to be an updated/upgrade version of [Laravel8](https://github.com/luisbull/laravel8), where some of the functionalities can be reused here.

## Table of Contents

* [How The Project Was Built](#how-the-project-was-built)
* [Getting Started](#getting-started)
* [Known Issues](#known-issues)
* [External Sources](#external-sources)
* [Future Additions](#future-additions)
* [Security Vulnerabilities](#security-vulnerabilities)
* [License](#future-additions)

## How The Project Was Built

These were the steps to create the core of this Laravel 10 project repository.

In your Terminal run command `laravel new` and follow the prompts: 

- What is the name of your project?
laravelBreeze-10

- Would you like to install a starter kit?
Laravel Breeze

- Which Breeze stack would you like to install?
Livewire (Volt Class API) with Alpine

- Would you like dark mode support?
Yes

- Which testing framework do you prefer?
Pest

- Would you like to initialize a Git repository?
Yes

This will create the project, but you will still be presented with the following prompt.

- Which database will your application use?
MySQL

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/luisbull/laravelBreeze10`
2. Install dependencies: `composer install && npm install`
3. Create a database and have ready `DB_DATABASE` - `DB_USERNAME` - `DB_PASSWORD` for the next step.
4. Set up environment variables: Copy `.env.example` to `.env` and configure your environment variables.
5. Run migrations: `php artisan migrate`
6. Start the development server: `php artisan serve` and `npm run dev` (or `npm run watch` for hot-reloading).

## Known Issues

None that I am aware of at the moment.

## External Sources

None at the moment.

## Future Additions

This will continue to be a work in progress as the project matures. Additions will be added here.

## Security Vulnerabilities

If you discover a security vulnerability within the project, please [send me a message](https://luistoro.co.uk/#contact).

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License.
