import React from 'react';
import { SandpackProvider, SandpackLayout, SandpackPreview } from '@codesandbox/sandpack-react';

// Preview Component: Responsible for rendering the Sandpack environment
const Preview = ({ files, packages }) => {
  return (
    <div style={styles.container}>
      <SandpackProvider
        template="react" // Specifies the template for Sandpack, in this case, a React project
        files={files} // Passes the files state to Sandpack
        customSetup={{
          dependencies: packages, // Passes the packages state as dependencies to Sandpack
        }}
      >
        <SandpackLayout>
          {/* SandpackPreview: Component that renders the preview of the project */}
          <SandpackPreview style={styles.preview} />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

// Styles for the Preview component
const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  preview: {
    flex: 1,
  },
};

export default Preview;