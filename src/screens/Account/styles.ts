import styled from 'styled-components';

export const ScrollContainer = styled.ScrollView`
	background-color: #f7f7f7;
`;

export const Container = styled.View`
	flex: 1;
	opacity: 0.9;

	margin-left: 20px;
`;

export const TitleInput = styled.Text`
	font-family: 'Roboto Classic';
	font-size: 20px;
	margin-top: 20px;
	margin-bottom: 2px;
`;

export const Entries = styled.View`
	flex-direction: row;
`;

export const Input = styled.TextInput`
	height: 38px;
	border-width: 2px;
	border-color: #dddddd;
	width: 250px;
	padding-left: 26px;
	justify-content: space-between;
	font-family: 'Roboto Classic';
	border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
	background-color: #b5c401;
	margin-left: 20px;
	align-items: center;
	justify-content: center;
	width: 70px;
	border-radius: 5px;
`;

export const TextButton = styled.Text`
	font-family: 'Roboto Classic';
	font-size: 15px;
`;
