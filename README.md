# Project Setup and Run Instructions

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js**: You can download it from [Node.js Official Website](https://nodejs.org/).
- **pnpm**: Install pnpm globally using the following command:
  ```bash
  npm install -g pnpm
  ```

## Getting Started

Follow these steps to set up and run the React project:

### Step 1: Install Dependencies

Run the following command to install all necessary dependencies:
```bash
pnpm i
```

This will read the `package.json` file and install all required packages.

### Step 2: Start the Development Server

Once the dependencies are installed, start the development server by running:
```bash
pnpm start
```

### Step 3: Start the Jason Server

Start the Json server by running:
```bash
pnpm json-server --watch db.json --port 3001
```

## Additional Notes

- If you encounter issues, make sure your `pnpm` version is up to date by running:
  ```bash
  pnpm -v
  ```
- If the application does not open automatically, manually open your browser and navigate to `http://localhost:3000`.

---

## Bonus Features
- Use React Router for navigation (e.g., protected routes). 

- Add loading states during API requests.

- Implement animations for smoother interactions (e.g., booking/cancelling). 

- Write basic unit tests (e.g., with Jest).

- Use TypeScript for type safety.

- Usage of Material UI and style components