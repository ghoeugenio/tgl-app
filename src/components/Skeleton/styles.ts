import styled from 'styled-components';

const color = '#eceff1';

export const Container = styled.View`
	border-left-width: 6px;
	border-left-color: ${color};
	border-radius: 6px;
	height: 80px;
	padding-left: 20px;
	margin-bottom: 20px;
	justify-content: center;
	overflow: hidden;
`;

export const Type = styled.View`
	height: 16px;
	width: 90px;
	background-color: ${color};
	border-radius: 5px;
`;

export const Numbers = styled.View`
	height: 16px;
	width: 250px;
	background-color: ${color};
	margin-bottom: 10px;
	border-radius: 5px;
`;

export const MoreInfo = styled.View`
	height: 10px;
	width: 100px;
	margin-bottom: 10px;
	background-color: ${color};
	border-radius: 5px;
`;
