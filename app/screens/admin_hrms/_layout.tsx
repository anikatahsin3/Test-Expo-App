import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OtMonitoring from "./OtMonitoring";
import DailyAttendance from "./DailyAttendance";
import DailyOtDetails from "./DailyOtDetails";

const Stack = createStackNavigator();

export default function AdminHrmsIndex() {
	return (
		<>
			<Stack.Navigator>
				<Stack.Screen name="OtMonitoring" component={OtMonitoring} />
				<Stack.Screen name="DailyAttendance" component={DailyAttendance} />
				<Stack.Screen name="DailyOtDetails" component={DailyOtDetails} />
			</Stack.Navigator>
		</>
	);
}
