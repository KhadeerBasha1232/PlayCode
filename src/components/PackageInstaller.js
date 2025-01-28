// src/components/PackageInstaller.js
import React, { useState } from 'react';

const PackageInstaller = ({ onInstall }) => {
  const [packageName, setPackageName] = useState('');

  const handleInstall = () => {
    if (packageName.trim()) {
      onInstall(packageName.trim());
      setPackageName('');
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Install NPM Package</h3>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={packageName}
          onChange={(e) => setPackageName(e.target.value)}
          placeholder="Enter package name"
          style={styles.input}
        />
        <button onClick={handleInstall} style={styles.button}>Install</button>
      </div>
    </div>
  );
};

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
};

export default PackageInstaller;