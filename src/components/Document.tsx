import React, { FC } from "react";
import { Document as PDFDocument, Page } from "@react-pdf/renderer";

import Header from "./Header";
import Education from "./Education";
import Experiences from "./Experiences";

const Resume: FC = () => (
    <Page
        size="A4"
        style={{
            padding: 30,
        }}
        wrap
    >
        <Header />
        <Experiences />
        <Education />
    </Page>
);

const Document: FC = () => (
    <PDFDocument
        author="Karen Grigoryan"
        keywords="awesome, javascript, cv, full-stack developer, react, typescript, node, express"
        subject="The CV of Karen Grigoryan"
        title="CV"
    >
        <Resume />
    </PDFDocument>
);

export default Document;
