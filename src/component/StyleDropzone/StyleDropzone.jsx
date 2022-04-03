import React, {useCallback, useMemo} from 'react';
import {useDropzone} from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export default function StyledDropzone(props) {
const onDrop=useCallback(
  (acceptedFiles)=>{
   
     props.setFile(acceptedFiles[0])
  },[])
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,acceptedFiles
  } = useDropzone({onDrop,multiple:false,accept:"image/*"});
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} 
    </li>
  ));
  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept===true ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
       <p>Drag 'n' drop your image here</p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

<StyledDropzone />