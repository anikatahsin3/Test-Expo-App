import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Base from "./base";

const Stack = createStackNavigator();

export default function AccountingIndex() {
	return (
		<>
			<Stack.Navigator>
				<Stack.Screen name="Base" component={Base} />
			</Stack.Navigator>
		</>
	);
}
