import React from "react";
import ReactPDF from "@react-pdf/renderer";

import Document from "./Document";

ReactPDF.render(
    <Document />,
    `${__dirname}/../../cv/senior-frontend-developer.pdf`
);
