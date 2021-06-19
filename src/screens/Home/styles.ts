import styled from 'styled-components';

const PRIMARY_COLOR = '#707070';

export const ScrollContainer = styled.ScrollView``;

export const Container = styled.View`
	height: 100%;
	opacity: 0.9;
	background-color: #f7f7f7;
	margin-left: 20px;
`;

export const TitleHome = styled.Text`
	font-family: 'Roboto Classic';
	font-size: 22px;
	color: ${PRIMARY_COLOR};
	margin-top: 30px;
`;

export const SubtitleHome = styled.Text`
	font-family: 'Roboto Medium Italic';
	font-size: 17px;
	color: ${PRIMARY_COLOR};
	margin-top: 20px;
`;

export const ButtonFilterDocker = styled.View`
	flex-direction: row;
	margin-top: 15px;
`;

export const RecentGames = styled.View`
	margin-right: 20px;
	margin-top: 15px;
`;

export const EmptyList = styled.View`
	height: 80px;
	align-items: center;
	justify-content: center;
`;

export const EmptyListText = styled.Text`
	font-family: 'Roboto Classic';
	font-size: 20px;
`;
