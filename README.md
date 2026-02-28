# Node JS Course Project

Image Processing API Project - For Udacity JS nanodegree created as part of the course. This repository contains the application source, tests (Jasmine), and configuration used during the course.

## Prerequisites

- Node.js (recommended LTS >= 14)
- npm (bundled with Node.js)

## Installation

Install dependencies:

```bash
npm install
```

## Available Scripts

- **Start the app:**

	```bash
	npm run start
	```

	This runs the application's start script (the project already uses `npm run start` in this workspace).

- **Run tests:**

	```bash
	npm test
	```

	Runs the test suite (spec/ and src/tests/ — Jasmine configuration is under `spec/support/jasmine.json`).

## Project Structure

- `src/` — application source files
- `spec/` — Jasmine spec and configuration
- `src/tests/` — additional test specs
- `package.json` — project manifest and npm scripts
- `tsconfig.json` — TypeScript configuration

## Notes

- You can run the app locally with `npm run start` after installing dependencies.
- If tests fail, run `npm test` to see detailed output.

## License
MIT
See the `LICENSE` file in the repository root.

