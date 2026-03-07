# Node JS Course Project

Image Processing API Project - For Udacity JS nanodegree created as part of the course. This repository contains the application source, tests (Jasmine), and configuration used during the course.


The API supports multiple image operations such as:

- Resize images
- Rotate images
- Blur images
- Multiple operations using Sharp constructor

Cache processed images for faster responses

## Prerequisites

- Node.js (recommended LTS >= 14)
- npm 

## Project Structure

- `src/` — application source files
- `spec/` — Jasmine spec and configuration
- `src/tests/` — test units
- `package.json` — project manifest and npm scripts
- `tsconfig.json` — TypeScript configuration


## Installation

1. Clone this repo

```bash
git clone https://github.com/tarekrishmawi/image-processing-api.git
```

Install dependencies:

```bash
npm install
```

## Available Scripts

- **Development Mode:**
  
	```bash
	npm run dev
	```

    This runs the application's dev script using nodemon. 

- **Start the app:**

	```bash
	npm run start
	```

	This runs the application's start script (the project already uses `npm run start` in this workspace).

- **Run tests:**

	```bash
	npm run test
	```

	Runs the test suite (spec/ and src/tests/ — Jasmine configuration is under `spec/support/jasmine.json`).

- **Linting & Formatting**
    Run Modern Flat ESLint:

	```bash
	npm run lint
	```

	Fix Linting errors:  

	```bash
	npm run lint:fix
	```

    Check Code with Prettier:
	```bash
	npm run format:check
	```

    Format Code with Prettier:
	```bash
	npm run format
	```

## API Endpoints

**Base Endpoint**
Returns a simple message to confirm that the server is running

```bash
GET /

Example:

http://localhost:3000/
```
**Image Processing Endpoints**

1. Resize endpoint used to resize images.


GET /images/resize
Example:
```bash
http://localhost:3000/images/resize?filename=fjord&width=200&height=200
```

2. Rotate endpoint used to rotate images.


GET /images/rotate
Example:
```bash
http://localhost:3000/images/rotate?filename=fjord&angle=90
```

3. Blur endpoint used to blur images.


GET /images/blur
Example:
```bash
http://localhost:3000/images/blur?filename=fjord&blurLevel=2
```


**Multiple Operations**
using Sharp chaining 

Example with several transformations:

GET /images/blur
Example:
```bash
http://localhost:3000/images/process?filename=fjord&width=300&height=300&angle=180&grayscale=true
```

| Parameter | Required | Example | Description |
|-----------|----------|---------|-------------|
| filename  | Yes      | fjord   | Image name in `assets/full` |
| width     | No       | 200     | Resize width |
| height    | No       | 200     | Resize height |
| angle     | No       | 90      | Rotation angle |
| grayscale | No       | true    | Convert to grayscale |

## Notes
- All image processing operations are handled using the Sharp library.

- The API is designed to support multiple transformations through query parameters.

- Processed images are cached to prevent unnecessary repeated processing.
  
## License
MIT
See the `LICENSE` file in the repository root.

