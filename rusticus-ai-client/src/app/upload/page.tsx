"use client";

import React from "react";
import { useDropzone } from "react-dropzone";

type File = {
  path: any;
};

function Upload() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 3,
    accept: {
      ".pdf": ["application/pdf"],
      ".txt": ["text/plain"],
      ".pptx": ["application/vnd.openxmlformats-officedocument.presentationml.presentation"]
    } 
  }
  );
  // Accepted file items rendering
  const acceptedFileItems = acceptedFiles.map((file => (
    <p key={file.name}> {file.name}</p>
  )));

  console.log("acceptedFiles", acceptedFiles);

  return (
    <>
      <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center ">
        <div className="w-[420px] bg-white p-8 rounded-2xl  flex flex-col gap-12 ">
          <div className="text-center">
            <h1 className="text-2xl font-medium text-gray-800">
              Upload Your Files Here
            </h1>
            <p className="text-gray-400 ">Files Should be less than 5 MB</p>
          </div>

          <div
            {...getRootProps({ className: "dropzone" })}
            className="w-full p-12 border-2 rounded-2xl  group flex flex-col items-center justify-center border-dashed   border-blue-400"
          >
            <svg
              className="w-14 aspect-square  group-hover:scale-105 "
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Open_Folder-2" data-name="Open Folder">
                <path
                  d="m45 18h-4v-4a2.996 2.996 0 0 0 -3-3h-15.25a2.9991 2.9991 0 0 1 -2.33-1.11l-1.96-2.41a3.9846 3.9846 0 0 0 -3.1-1.48h-11.36a2.996 2.996 0 0 0 -3 3v29.57a3.3672 3.3672 0 0 0 1.01 2.42 3.3672 3.3672 0 0 0 2.42 1.01h33.66a3.441 3.441 0 0 0 3.3-2.47l5.53-18.97a2.003 2.003 0 0 0 -1.92-2.56z"
                  fill="#376cfb"
                />
                <path
                  d="m44.9987 18h-28.4262a3.43 3.43 0 0 0 -3.2925 2.47l-5.56 19.0614a3.4286 3.4286 0 0 1 -3.2914 2.4686h33.6638a3.43 3.43 0 0 0 3.2933-2.47l5.5331-18.97a2 2 0 0 0 -1.9201-2.56z"
                  fill="#4294ff"
                />
              </g>
            </svg>
            <input {...getInputProps()} />
            <p className="text-gray-400">Drag & Drop your files here</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-full rounded-2xl flex flex-col gap-2">
              <p className="text-gray-500">Uploaded Files</p>
              {acceptedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-2 rounded-xl bg-gray-200 text-gray-700"
                >
                  <p>{file.name}</p>
                  {/* Add a delete button if needed */}
                  {/* <button>Delete</button> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upload;
