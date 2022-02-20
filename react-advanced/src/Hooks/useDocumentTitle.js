import React, { useEffect } from "react";

export default function useDocumentTitle(title) {
  return useEffect(() => (document.title = title));
}
