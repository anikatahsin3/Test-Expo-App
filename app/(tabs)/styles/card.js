import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../../constants/Colors";


export default function Card({ logo, title, customStyles = {}, onPress }) {
	return (
		<TouchableOpacity style={[styles.card, customStyles]} onPress={onPress}>
			<View style={styles.logoContainer}>{React.isValidElement(logo) ? logo : <Text>{logo}</Text>}</View>
			<Text style={styles.cardTitle}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		display: "flex",
		flexDirection: "row",
		width: "49%",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 22,
		paddingVertical: 24,
		borderRadius: 8,
		backgroundColor: Colors.CARD_BACKGROUD_COLOR,
		gap: 10,
		display: "inline-flex",
	},
	cardTitle: {
		color: "black",
		fontSize: 15,
		fontWeight: "600",
		lineHeight: 18,
		textAlign: "left",
		wordWrap: "break-word",
	},
	logoContainer: {
		width: 30,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
	},
});
