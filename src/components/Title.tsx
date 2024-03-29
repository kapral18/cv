import { FC, ReactNode } from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    marginBottom: 10,
    textTransform: "uppercase",
  },
});

const Title: FC<{ children: ReactNode }> = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

export default Title;
