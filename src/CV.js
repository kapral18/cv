import React from "react";
import Doc from "./Document";
import ReactPDF from "@react-pdf/renderer";

ReactPDF.render(<Doc isPdf />, `${__dirname}/../out/cv.pdf`);
