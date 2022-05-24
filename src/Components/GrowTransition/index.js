import React, { useState, useEffect } from "react";
import Grow from "@mui/material/Grow";

export default function GrowTransition({ children }) {
  const [tarckGrow, setTrackGrow] = useState(false);

  useEffect(() => {
    setTrackGrow(true);
    return () => setTrackGrow(false);
  }, []);

  return <Grow in={tarckGrow}>{children}</Grow>;
}
