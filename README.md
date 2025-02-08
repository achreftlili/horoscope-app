# Horoscope App

This is a simple Express-based web application that provides a user's zodiac sign based on their birthdate.

## Features

- Get the zodiac sign based on the provided birthdate in the format `YYYY-MM-DD`.
- Returns a 400 status code if the `birthdate` is missing or the format is invalid.
- A 500 status code is returned if there is an error while calculating the zodiac sign.

## Technologies Used

- **Node.js** for the backend server.
- **Express** as the web framework.
- **Horoscope** library to determine the zodiac sign.
- **Jest** for unit testing.
- **Supertest** for making HTTP requests in tests.

## Setup

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd horoscope-app

## Requirements

- Docker
- Docker Compose

## To run project
   ```bash
   docker-compose up -d
