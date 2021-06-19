import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {tokenActions} from '../../store/Redux/token';
import {useAppDispatch} from '../../hooks/hooks';
import {Container, TextHeader, TextLogo, ButtonHeader, BarText} from './styles';

const HeaderApp = ({navigation}: any) => {
	const dispatch = useAppDispatch();

	const logoutHandler = () => {
		dispatch(tokenActions.setToken(''));
		navigation.navigate('Login');
	};

	return (
		<Container>
			<TextHeader>
				<TextLogo>TGL</TextLogo>
				<BarText />
			</TextHeader>
			<ButtonHeader onPress={logoutHandler}>
				<MaterialIcons name="logout" size={24} color="#C1C1C1" />
			</ButtonHeader>
		</Container>
	);
};

export default HeaderApp;
