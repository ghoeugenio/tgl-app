import {Roboto_100Thin_Italic} from '@expo-google-fonts/roboto';
import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';

const Loader = () => {
	return (
		<Modal animationType="fade" transparent={true}>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'rgba(0, 0, 0, 0.8)',
					zIndex: 100,
				}}
			>
				<ActivityIndicator size={120} color="#b5c401" />
			</View>
		</Modal>
	);
};
export default Loader;
