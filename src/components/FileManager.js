import React, { useState } from 'react';

// FileManager Component: Manages the list of files, allows adding and deleting files
const FileManager = ({ files, activeFile, setActiveFile, setFiles }) => {
  // State to store the new file name input by the user
  const [newFileName, setNewFileName] = useState('');

  // Function to add a new file
  const addFile = () => {
    // Check if the new file name is not empty and doesn't already exist
    if (newFileName.trim() && !files[newFileName]) {
      // Update the files state with the new file
      setFiles({ ...files, [newFileName]: '' });
      // Set the new file as the active file
      setActiveFile(newFileName);
      // Clear the new file name input
      setNewFileName('');
    }
  };

  // Function to delete a file
  const deleteFile = (fileName) => {
    // Ensure there is more than one file before deleting
    if (Object.keys(files).length > 1) {
      // Create a copy of the files state and delete the specified file
      const newFiles = { ...files };
      delete newFiles[fileName];
      // Update the files state with the remaining files
      setFiles(newFiles);

      // If the deleted file was the active file, set the first file as the active file
      if (activeFile === fileName) {
        setActiveFile(Object.keys(newFiles)[0]);
      }
    } else {
      // Alert the user if they attempt to delete the only file
      alert("Cannot delete the only file.");
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>File Manager</h3>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newFileName}
          onChange={(e) => setNewFileName(e.target.value)}
          placeholder="New file name"
          style={styles.input}
        />
        <button onClick={addFile} style={styles.button}>Add</button>
      </div>
      <ul style={styles.fileList}>
        {Object.keys(files).map((file) => (
          <li key={file} style={styles.fileItem}>
            <span
              onClick={() => setActiveFile(file)}
              style={{ ...styles.fileName, fontWeight: activeFile === file ? 'bold' : 'normal' }}
            >
              {file}
            </span>
            <button onClick={() => deleteFile(file)} style={styles.deleteButton}>✖</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles for the FileManager component
const styles = {
  container: {
    padding: '20px',
    border: '1px solid #e1e4e8',
    borderRadius: '8px',
    marginBottom: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: '600',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    flex: '1',
    marginRight: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    transition: 'background-color 0.3s',
  },
  fileList: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    maxHeight: '200px',
    overflowY: 'auto',
  },
  fileItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
  fileName: {
    flex: '1',
    fontSize: '14px',
    color: '#333',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '5px 10px',
    cursor: 'pointer',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    transition: 'background-color 0.3s',
  },
};

export default FileManager;