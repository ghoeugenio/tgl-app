import styled from 'styled-components';

export const Container = styled.View`
	width: 100%;
	height: 120px;
	flex-direction: row;
	background-color: #fefefe;
	justify-content: space-between;
	align-items: center;
`;

export const TextHeader = styled.View`
	margin-top: 30px;
	margin-left: 28px;

	height: 42px;
`;

export const TextLogo = styled.Text`
	font-size: 30px;
	font-family: 'Roboto Classic';
	color: #707070;
`;

export const BarText = styled.View`
	width: 60px;
	height: 0px;
	border-radius: 4px;
	border-width: 3px;
	border-color: #b5c401;
`;

export const ButtonHeader = styled.TouchableOpacity`
	margin-right: 20px;
	margin-top: 50px;
`;
