import React from "react";
import { Link, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		borderBottomWidth: 2,
		borderBottomColor: "#112131",
		borderBottomStyle: "solid",
		alignItems: "stretch"
	},
	detailColumn: {
		flexDirection: "column",
		flexGrow: 9
	},
	name: {
		fontSize: 24,
		textTransform: "uppercase"
	},
	subtitle: {
		fontSize: 10,
		justifySelf: "flex-end",
		textTransform: "uppercase"
	},
	location: {
		marginTop: 10,
		fontSize: 10
	},
	email: {
		fontSize: 9,
		textDecoration: "underline",
		color: "blue"
	},
	rightLink: {
		fontSize: 10,
		marginBottom: 5
	}
});

export default () => (
	<View style={styles.container}>
		<View style={styles.detailColumn}>
			<Text style={styles.name}>Karen Grigoryan</Text>
			<Text style={styles.subtitle}>Senior Front-end Engineer</Text>
			<Text style={styles.location}>Zaandam, The Netherlands</Text>
			<Text style={styles.email}>hey@karenjs.com</Text>
		</View>
		<View>
			<Link style={styles.rightLink} src="https://karenjs.com">
				Personal website
			</Link>
			<Link
				style={styles.rightLink}
				src="https://stackoverflow.com/users/2998898/karen-grigoryan?tab=answers"
			>
				StackOverflow
			</Link>
			<Link style={styles.rightLink} src="https://github.com/kapral18">
				GitHub
			</Link>
			<Link style={styles.rightLink} src="https://www.linkedin.com/in/kapral18">
				Linkedin
			</Link>
		</View>
	</View>
);
