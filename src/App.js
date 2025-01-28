import React, { useState } from 'react';
import FileManager from './components/FileManager';
import Editor from './components/Editor';
import Preview from './components/Preview';
import PackageList from './components/PackageList';
import PackageInstaller from './components/PackageInstaller';

// Main App Component
const App = () => {
  // State to store the files in the editor
  const [files, setFiles] = useState({
    '/App.js': `import React from 'react';\n\nconst App = () => (\n  <div>\n    <h1>Hello from Monaco Editor!</h1>\n  </div>\n);\n\nexport default App;`,
    '/index.js': `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);`,
  });

  // State to store the currently active file in the editor
  const [activeFile, setActiveFile] = useState('/App.js');

  // State to manage the collapse state of the FileManager
  const [isFileManagerCollapsed, setIsFileManagerCollapsed] = useState(false);

  // State to store the installed packages
  const [packages, setPackages] = useState({
    react: 'latest',
    'react-dom': 'latest',
  });

  // Function to toggle the FileManager collapse state
  const toggleFileManager = () => {
    setIsFileManagerCollapsed(!isFileManagerCollapsed);
  };

  // Function to handle the installation of new packages
  const handleInstall = (packageName) => {
    // Check if the package name is valid and not already installed
    if (packageName && !packages[packageName]) {
      // Update the packages state with the new package
      setPackages((prevPackages) => ({
        ...prevPackages,
        [packageName]: 'latest',
      }));
    } else {
      // Alert the user if the package name is invalid or already installed
      alert('Invalid package name or package already installed.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>React + Monaco Editor + Sandpack</h2>
      <div style={styles.content}>
        {/* Left pane containing FileManager and Editor */}
        <div style={styles.leftPane}>
          <button onClick={toggleFileManager} style={styles.collapseButton}>
            {isFileManagerCollapsed ? 'Show File Manager' : 'Hide File Manager'}
          </button>
          {/* Conditionally render the FileManager based on its collapse state */}
          {!isFileManagerCollapsed && (
            <div style={styles.fileManagerWrapper}>
              <FileManager files={files} activeFile={activeFile} setActiveFile={setActiveFile} setFiles={setFiles} />
            </div>
          )}
          <div style={styles.editorWrapper}>
            {/* Display the name of the currently active file */}
            <div style={styles.editorHeader}>{activeFile}</div>
            {/* Render the Editor component */}
            <Editor files={files} activeFile={activeFile} setFiles={setFiles} />
          </div>
        </div>
        {/* Right pane containing Preview, PackageInstaller and PackageList */}
        <div style={styles.rightPane}>
          {/* Render the Preview component with the current files and packages */}
          <Preview files={files} packages={packages} />
          {/* Render the PackageInstaller component with the handleInstall function */}
          <PackageInstaller onInstall={handleInstall} />
          {/* Render the PackageList component with the current packages */}
          <PackageList packages={packages} />
        </div>
      </div>
    </div>
  );
};

// Styles for the components
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f4f8',
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
    },
  },
  leftPane: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column', // Change to column to include the collapse button
    gap: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    overflow: 'hidden',
  },
  collapseButton: {
    marginBottom: '10px',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
  },
  fileManagerWrapper: {
    flex: '1 1 200px',
    minHeight: '350px',
    marginBottom: '10px',
    overflowY: 'auto',
  },
  editorWrapper: {
    flex: '2',
    overflowY: 'hidden',
  },
  editorHeader: {
    padding: '10px',
    backgroundColor: '#f0f4f8',
    borderBottom: '1px solid #ccc',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  rightPane: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '10px',
  },
  '@media (min-width: 768px)': {
    content: {
      flexDirection: 'row',
    },
    leftPane: {
      flexDirection: 'row',
    },
    fileManagerWrapper: {
      flex: '1 1 200px',
      marginRight: '10px',
      marginBottom: '0',
    },
    editorWrapper: {
      flex: '3 1 0',
      overflowY: 'auto',
    },
  },
};

export default App;