import { FC } from "react";
import { View } from "@react-pdf/renderer";

import Certification from "./Certification";
import { certifications } from "../certifications";
import Title from "./Title";

const Certifications: FC = () => (
  <View
    break={true}
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
    <Title>Certifications</Title>
    {certifications.map((certification) => (
      <Certification key={certification.id} certification={certification} />
    ))}
  </View>
);

export default Certifications;
