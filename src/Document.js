import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import Header from "./Header";
import Education from "./Education";
import Experience from "./Experience";

const Resume = ({ size, isPdf }) => (
	<Page
		size={size}
		style={{
			padding: 30
		}}
		wrap
	>
		<Header />
		<Experience />
		<Education />
	</Page>
);

const Doc = ({ isPdf }) => (
	<Document
		author="Karen Grigoryan"
		keywords="awesome, javascript, resume"
		subject="The CV of Karen Grigoryan"
		title="CV"
	>
		<Resume isPdf={isPdf} size="A4" />
	</Document>
);

export default Doc;
