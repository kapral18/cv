import React, { FC } from "react";
import { Link, Text, View } from "@react-pdf/renderer";

import type { TExperience } from "../types";
import ListItem from "./ListItem";

const Experience: FC<{ experience: TExperience }> = ({ experience }) => {
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
                        {experience.position}
                    </Text>
                    <Link
                        style={{
                            fontSize: 11,
                        }}
                        src={experience.url}
                    >
                        {experience.company}
                    </Link>
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        flexGrow: 1,
                        alignItems: "flex-end",
                        ...{ justifySelf: "flex-end" },
                    }}
                >
                    <Text
                        style={{
                            fontSize: 9,
                            color: "grey",
                        }}
                    >
                        {experience.date}
                    </Text>
                </View>
            </View>
            {experience.description ? (
                <Text style={{ fontSize: 11 }}>
                    ( {experience.description} )
                </Text>
            ) : null}
            {experience.achievements.length ? (
                <View style={{ marginTop: 5 }}>
                    {experience.achievements.map((achievement, i) => (
                        <ListItem key={i}>{achievement}</ListItem>
                    ))}
                </View>
            ) : null}

            <Text
                style={{
                    marginTop: 5,
                    fontSize: 9,
                    color: "#666",
                }}
            >
                Stack: {experience.stack.join(", ")}
            </Text>
        </View>
    );
};

export default Experience;
