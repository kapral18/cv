import React, { FC } from "react";
import { View } from "@react-pdf/renderer";

import { experiences } from "../experiences";
import Experience from "./Experience";

const Experiences: FC = () => (
    <View
        style={{
            paddingTop: 15,
            ...{
                "@media max-width: 400": {
                    paddingTop: 10,
                    paddingLeft: 0,
                },
            },
        }}
    >
        {experiences.map((experience) => (
            <Experience
                key={experience.company + experience.position}
                experience={experience}
            />
        ))}
    </View>
);

export default Experiences;
