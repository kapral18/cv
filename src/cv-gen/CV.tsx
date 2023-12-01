import ReactPDF from "@react-pdf/renderer";

import Document from "../components/Document";

ReactPDF.render(
  <Document />,
  `${__dirname}/../../cv/senior-software-developer.pdf`,
);
