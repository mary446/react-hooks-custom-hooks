import { useEffect } from "react";

function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = "Underreacted | Home";
  }, []);
}

export default useDocumentTitle;