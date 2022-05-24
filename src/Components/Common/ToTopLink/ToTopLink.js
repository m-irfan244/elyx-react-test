import React from "react";
import { Link } from "react-router-dom";

export default function ToTopLink(props) {
  return <Link {...props} onClick={() => window.scrollTo(0, 0)} />;
}
