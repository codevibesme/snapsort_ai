import React, { useState } from 'react';
import FileContextMenu from './FileContextMenu';

const FileStructure: React.FC = () => {
  const [files, setFiles] = useState<GlobalFile[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<GlobalFile | null>(null);

  const createFolder = () => {
    const folder: GlobalFile = { name: 'New Folder', type: 'folder', children: [] };
    setFiles([...files, folder]);
  };

  const createFile = (fileName: string) => {
    if (!selectedFolder || selectedFolder.type !== 'folder') return;
    const file: GlobalFile = { name: fileName, type: 'file' };
    selectedFolder.children?.push(file);
    setFiles([...files]);
  };

  const handleFolderClick = (folder: GlobalFile) => {
    setSelectedFolder(folder);
  };

  return (
    <div className="flex">
      <div className="w-1/4 border-r">
        <button onClick={createFolder}>Create Folder</button>
        <ul>
          {files.map((file, index) => (
            <li key={index} onClick={() => handleFolderClick(file)}>
              {file.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4">
        {/* Display files inside selected folder */}
        {selectedFolder && (
          <div>
            <h2>{selectedFolder.name}</h2>
            {selectedFolder.children?.map((child, index) => (
              <div key={index}>{child.name}</div>
            ))}
          </div>
        )}
      </div>
      {selectedFolder && (
        <FileContextMenu
          folder={selectedFolder}
          onFolderCreated={(name) => {
            if (selectedFolder) {
              const newFolder: GlobalFile = { name: name, type: 'folder', children: [] };
              selectedFolder.children?.push(newFolder);
              setFiles([...files]);
            }
          }}
          onFileCreated={(name) => createFile(name)}
        />
      )}
    </div>
  );
};

export default FileStructure;
