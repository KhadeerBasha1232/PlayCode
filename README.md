
# React + Monaco Editor + Sandpack Project

## Overview

This project is a React-based application that integrates Monaco Editor and Sandpack to provide a live coding environment. It includes components for managing files, editing code, installing npm packages, and previewing the output.

## Features

- **File Manager**: Add, delete, and switch between files.
- **Editor**: Edit code with Monaco Editor.
- **Preview**: Live preview of the code using Sandpack.
- **Package List**: View installed npm packages.
- **Package Installer**: Install new npm packages.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KhadeerBasha1232/PlayCode.git
   cd PlayCode
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

### File Manager

- **Add a File**: Enter the new file name in the input field and click "Add".
- **Delete a File**: Click the "✖" button next to the file name.
- **Switch File**: Click on the file name to set it as the active file.

### Editor

- The editor displays the content of the active file.
- Make changes to the code, and the changes will be reflected in the preview.

### Preview

- The preview component shows the live output of the code using Sandpack.

### Package List

- View the list of installed npm packages in the application.

### Package Installer

- **Install a Package**: Enter the package name in the input field and click "Install". The package will be added to the list of dependencies and the preview will be updated.

## Project Structure

```
src/
├── components/
│   ├── FileManager.js
│   ├── Editor.js
│   ├── Preview.js
│   ├── PackageList.js
│   └── PackageInstaller.js
├── App.js
├── index.js
└── styles.js
```

## Contributing

Contributions are welcome! Please create a pull request or submit an issue if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


**DONE BY KHADEER BASHA**
