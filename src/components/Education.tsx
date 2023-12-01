import { FC } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "./Title";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
  },
  school: {
    fontSize: 10,
  },
  degree: {
    fontSize: 8,
    marginTop: 3,
    marginBottom: 3,
  },
  candidate: {
    fontSize: 8,
    color: "grey",
  },
  degreeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const Education: FC = () => (
  <View style={styles.container}>
    <Title>Education</Title>
    <Text style={styles.school}>
      The Institute for the Humanities and Information Technologies
    </Text>
    <View style={styles.degreeContainer}>
      <Text style={styles.degree}>Lawyer, Civil Law</Text>
      <Text style={styles.candidate}>2005 - 2010</Text>
    </View>
  </View>
);

export default Education;
