// src/components/PackageList.js
import React from 'react';

const PackageList = ({ packages }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Installed NPM Packages</h3>
      <ul style={styles.packageList}>
        {Object.keys(packages).map((pkg) => (
          <li key={pkg} style={styles.packageItem}>
            {pkg}: {packages[pkg]}
          </li>
        ))}
      </ul>
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
  packageList: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  packageItem: {
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
};

export default PackageList;