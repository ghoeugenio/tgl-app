import styled from 'styled-components';

const FONT_BOLD = 'Roboto Classic';
const PRIMARY_COLOR = '#707070';
const SECONDARY_COLOR = '#b5c401';

interface IPropsLogin {
	inUI: boolean;
}

export const ScrollContainer = styled.ScrollView``;

export const Container = styled.View`
	flex: 1;
	align-items: center;
	background-color: #f7f7f7;
	height: 700px;
`;

export const Title = styled.View`
	margin-top: 16px;
	margin-bottom: 46px;

	border-bottom-color: ${SECONDARY_COLOR};
	border-bottom-width: 7px;
	border-radius: 6px;
	width: 137px;

	align-items: center;
`;

export const TitleText = styled.Text`
	font-size: 44px;
	font-family: ${FONT_BOLD};
	color: ${PRIMARY_COLOR};
`;

// modular components

export const ComponentContainer = styled.View`
	height: 361px;
	width: 310px;
	align-items: center;
`;

export const ComponentTitle = styled.Text`
	font-size: 35px;
	font-family: ${FONT_BOLD};
	color: ${PRIMARY_COLOR};
`;

export const ComponentUI = styled.View`
	width: 306px;
	margin-top: 26px;

	align-items: center;
	background-color: #fff;
	box-shadow: 0px 3px 25px blue;
	elevation: 2px;
	border-radius: 10px;
`;

export const ComponentInput = styled.TextInput`
	height: 68px;
	border-bottom-width: 2px;
	border-bottom-color: #dddddd;
	width: 305px;
	padding-left: 26px;
	justify-content: space-between;
	font-family: ${FONT_BOLD};
`;

export const ShowPassword = styled.TouchableOpacity`
	position: absolute;
	width: 25px;
	right: 0;
	margin-right: 20px;
	margin-top: 90px;
`;

export const ForgetPassword = styled.TouchableOpacity`
	font-family: 'Roboto Medium Italic';
	margin-left: 158px;
	margin-top: 25px;
	width: 140px;
	font-size: 14px;
`;

export const ForgetPasswordText = styled.Text`
	color: #c1c1c1;
`;

export const ComponentButton = styled.TouchableOpacity`
	margin-top: 40px;
	margin-bottom: 36px;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	width: 150px;
`;

export const ComponentTextButton = styled.Text<IPropsLogin>`
	font-size: 30px;
	font-family: ${FONT_BOLD};
	color: ${(props: IPropsLogin) =>
		props.inUI ? SECONDARY_COLOR : PRIMARY_COLOR};
	margin-left: 7px;
	margin-right: 7px;
`;
