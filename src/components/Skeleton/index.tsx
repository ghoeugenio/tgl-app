import React, {useEffect} from 'react';
import {Animated} from 'react-native';

import {Container, Type, Numbers, MoreInfo} from './styles';

const Skeleton = () => {
	const AnimatedValue = new Animated.Value(0);

	const translateX = AnimatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [-10, 250],
	});

	const translateX2 = AnimatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [-10, 110],
	});

	const translateX3 = AnimatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [-10, 100],
	});

	useEffect(() => {
		loopAnimation();

		return () => loopAnimation();
	}, []);

	const loopAnimation = () => {
		AnimatedValue.setValue(0);
		Animated.timing(AnimatedValue, {
			toValue: 1,
			duration: 450,
			useNativeDriver: false,
		}).start(() => {
			setTimeout(() => {
				loopAnimation();
			}, 400);
		});
	};

	return (
		<Container>
			<Numbers>
				<Animated.View
					style={{
						width: '30%',
						height: '100%',
						opacity: 0.5,
						backgroundColor: 'rgba(256, 256, 256, 0.8)',
						transform: [{translateX: translateX}],
					}}
				></Animated.View>
			</Numbers>
			<MoreInfo>
				<Animated.View
					style={{
						width: '30%',
						height: '100%',
						opacity: 0.5,
						backgroundColor: 'rgba(256, 256, 256, 0.5)',
						transform: [{translateX: translateX2}],
					}}
				></Animated.View>
			</MoreInfo>
			<Type>
				<Animated.View
					style={{
						width: '30%',
						height: '100%',
						opacity: 0.5,
						backgroundColor: 'rgba(256, 256, 256, 0.5)',
						transform: [{translateX: translateX3}],
					}}
				></Animated.View>
			</Type>
		</Container>
	);
};

export default Skeleton;
