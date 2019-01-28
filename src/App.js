import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Doc from "./Document";

const Output = () => (
	<PDFViewer style={{ width: "100%", height: "100%" }}>
		<Doc />
	</PDFViewer>
);

export default Output;
