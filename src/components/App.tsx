import { PDFViewer } from "@react-pdf/renderer";

import Document from "./Document";

const App = () => (
  <PDFViewer width="100%" height="100%">
    <Document />
  </PDFViewer>
);

export default App;
