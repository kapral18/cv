import React, { FC } from "react";
import { Link, Text, View } from "@react-pdf/renderer";

import type { TCertification } from "../types";

const Certification: FC<{ certification: TCertification }> = ({
    certification,
}) => {
    return (
        <View
            style={{
                paddingBottom: 3,
                marginBottom: 10,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    marginBottom: 5,
                }}
            >
                <View
                    style={{
                        flexDirection: "column",
                        flexGrow: 9,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 14,
                            textDecoration: "none",
                        }}
                    >
                        {certification.name}
                    </Text>
                    <Text
                        style={{
                            fontSize: 11,
                            textDecoration: "none",
                        }}
                    >
                        {certification.company}
                    </Text>
                    <Text
                        style={{
                            fontSize: 9,
                            textDecoration: "none",
                        }}
                    >
                        {certification.id}
                    </Text>
                    <Text
                        style={{
                            fontSize: 9,
                            textDecoration: "none",
                        }}
                    >
                        {certification.issueDate}
                    </Text>
                    <Link
                        style={{
                            fontSize: 9,
                            color: "blue",
                        }}
                        src={certification.url}
                    >
                        {certification.url}
                    </Link>
                </View>
            </View>
        </View>
    );
};

export default Certification;
