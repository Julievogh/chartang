"use client";
import { useEffect } from "react";
function SaveURL({ url }) {
  useEffect(() => {
    if (localStorage.getItem("urls") === null) {
      localStorage.setItem("urls", JSON.stringify([]));
    }
    const urls = JSON.parse(localStorage.getItem("urls"));
    urls.push(url);

    localStorage.setItem("urls", JSON.stringify(urls));
  }, []);
  return null;
}

export default SaveURL;
