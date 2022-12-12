import { Outlet } from "@remix-run/react";

import Document from "./document";

function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export default App;
