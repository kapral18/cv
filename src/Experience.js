import React from "react";
import List, { Item } from "./List";
import { Text, Link, View } from "@react-pdf/renderer";
import data from "./data.json";

const ExperienceEntry = ({ data }) => {
	return (
		<View
			style={{
				paddingBottom: 3,
				marginBottom: 10
			}}
		>
			<View
				style={{
					flexDirection: "row",
					marginBottom: 5
				}}
			>
				<View
					style={{
						flexDirection: "column",
						flexGrow: 9
					}}
				>
					<Text
						style={{
							fontSize: 14,
							textDecoration: "none"
						}}
					>
						{data.position}
					</Text>
					<Link
						style={{
							fontSize: 11
						}}
						src={data.url}
					>
						{data.company}
					</Link>
				</View>
				<View
					style={{
						flexDirection: "column",
						flexGrow: 1,
						alignItems: "flex-end",
						justifySelf: "flex-end"
					}}
				>
					<Text
						style={{
							fontSize: 9,
							color: "grey"
						}}
					>
						{data.date}
					</Text>
				</View>
			</View>
			{data.description && (
				<Text style={{ fontSize: 11 }}>( {data.description} )</Text>
			)}
			{data.achievements.length ? (
				<View style={{ marginTop: 5 }}>
					<List>
						{data.achievements.map((achievement, i) => (
							<Item key={i}>{achievement}</Item>
						))}
					</List>
				</View>
			) : null}

			<Text
				style={{
					marginTop: 5,
					fontSize: 9,
					color: "#666"
				}}
			>
				[ {data.stack.join(" ] [ ")} ]
			</Text>
		</View>
	);
};

const Experience = () => (
	<View
		style={{
			paddingTop: 15,
			"@media max-width: 400": {
				paddingTop: 10,
				paddingLeft: 0
			}
		}}
	>
		{data.map((exp) => (
			<ExperienceEntry key={exp.company + exp.position} data={exp} />
		))}
	</View>
);

export default Experience;
