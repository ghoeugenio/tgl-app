import React, {useEffect, useState} from 'react';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Roboto_500Medium,
	Roboto_500Medium_Italic,
	Roboto_700Bold_Italic,
} from '@expo-google-fonts/roboto';
import * as Font from 'expo-font';

let customFonts = {
	'Roboto Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
	'Roboto Medium Italic': require('../../assets/fonts/Roboto-MediumItalic.ttf'),
	'Roboto Classic': require('../../assets/fonts/Roboto-BoldItalic.ttf'),
};

export const Fonts = () => {
	const [fontLoaded, setFontLoaded] = useState<boolean>(false);

	useEffect(() => {
		loadFonts();
	});

	const loadFonts = async () => {
		await Font.loadAsync(customFonts);
		setFontLoaded(true);
	};

	if (!fontLoaded) {
		return <AppLoading />;
	} else {
		return null;
	}
};
export default Fonts;
