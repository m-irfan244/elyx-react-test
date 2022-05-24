import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box } from "@mui/material";

const ElyxEditor = React.memo(function ElyxEditor({ value, setValue }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "blockquote"], // toggled buttons
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme

      ["clean"],
    ],
  };

  return (
    <Box sx={{ boxSizing: "border-box" }}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
    </Box>
  );
});

export default ElyxEditor;
