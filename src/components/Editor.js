import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const Editor = ({ files, activeFile, setFiles }) => {
  return (
    <div style={styles.container}>
      <MonacoEditor
        height="600px"
        language="javascript"
        value={files[activeFile]}
        onChange={(value) => setFiles({ ...files, [activeFile]: value })}
        theme="vs-dark"
        options={styles.editorOptions}
      />
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    backgroundColor: '#fff',
    minHeight: '600px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    height: '100%',
  },
  editorOptions: {
    minimap: { enabled: false },
  },
};

export default Editor;
