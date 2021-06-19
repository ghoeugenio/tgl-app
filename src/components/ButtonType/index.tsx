import React from 'react';

import {ButtonFilter, TextButtonFilter} from './styles';

interface IButtonType {
	color: string;
	isSelect: boolean;
	type: string;
	pressed: Function;
}

const ButtonType = ({color, isSelect, type, pressed}: IButtonType) => {
	return (
		<ButtonFilter color={color} isSelect={isSelect} onPress={pressed}>
			<TextButtonFilter color={color} isSelect={isSelect}>
				{type}
			</TextButtonFilter>
		</ButtonFilter>
	);
};
export default ButtonType;
