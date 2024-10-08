import React from "react";
import { View, Text } from "react-native";
import { LAYOUT } from "./styles/layout";
import { HOME } from "./styles/home";
import Card from "./styles/card";
import icon from "../../assets/images/home/svg";
import { useRouter } from "expo-router";

export default function Home() {
	const router = useRouter();

	return (
		<>
			<View style={LAYOUT.baseStructure}>
				<View style={HOME.container}>
					<View style={HOME.header}>
						<icon.SPOTFAME_LOGO />
						<Text style={HOME.company_name}>SPOTFAME</Text>
					</View>
					<View style={HOME.body}>
						<View style={HOME.title_container}>
							<Text style={HOME.title}>Our Modules</Text>
						</View>
						<View style={HOME.card_container}>
							<View style={HOME.card}>
								<Card
									logo={<icon.OFFICE_CHAIR />}
									title="Admin & HRMS"
									customStyles={{
										marginVertical: 6,
									}}
									onPress={() => router.push("/screens/admin_hrms/OtMonitoring")}
								/>
								<Card
									logo={<icon.COMPUTER_DOLLAR />}
									title="Accounting"
									customStyles={{
										marginVertical: 6,
									}}
									onPress={() => router.push("/screens/accounting/base")}
								/>
							</View>
							<View style={HOME.card}>
								<Card
									logo={<icon.SHIRT_01 />}
									title="Merchandizing"
									customStyles={{
										marginVertical: 6,
									}}
									onPress={() => router.push("/screens/merchandizing/base")}
								/>
								<Card
									logo={<icon.DASHBOARD_BROWSING />}
									title="Inventory"
									customStyles={{
										marginVertical: 6,
									}}
									onPress={() => router.push("/screens/inventory/base")}
								/>
							</View>
							<View style={HOME.card}>
								<Card
									logo={<icon.ALIGN_BOX_TOP_LEFT />}
									title="Commercial"
									customStyles={{
										marginVertical: 6,
									}}
									onPress={() => router.push("/screens/commercial/base")}
								/>
							</View>
						</View>
					</View>
				</View>
			</View>
		</>
	);
}
