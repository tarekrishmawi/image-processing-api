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
**Image Processing Endpoint**
**Multiple Operations**

using Sharp chaining 

Example with several transformations:

GET /images/process

Example:
```bash
http://localhost:3000/api/images/process?filename=fjord&angle=90&width=1200&height=1200&sigma=2&flip=true&flop=true&grayscale=true
```

| Parameter | Required | Example | Description |
|-----------|----------|---------|-------------|
| filename  | Yes      | fjord   | Image name in `assets/full` |
| angle     | No       | 90      | Rotation angle |
| width     | No       | 200     | Resize width |
| height    | No       | 200     | Resize height |
| sigma     | No       | 0.3-1000| Blur value |
| flip      | No       | true    | flip vertically |
| flop      | No       | true    | flip horizontally |
| grayscale | No       | true    | Convert to grayscale |

### Supported Image Formats
The API supports the following image formats:
* **JPEG** (`.jpg`, `.jpeg`)
* **PNG** (`.png`)
* **WebP** (`.webp`)
  
## Notes
- All image processing operations are handled using the Sharp library.

- The API is designed to support multiple transformations through query parameters.

- Processed images are cached to prevent unnecessary repeated processing.
  
## License
MIT
See the `LICENSE` file in the repository root.

