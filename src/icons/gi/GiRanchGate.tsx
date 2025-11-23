import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const GiRanchGate = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M25 41v46h462V41zm30 64v382h30V105zm83.2 0L103 140.2v25.6l60.8-60.8zm60.8 0v30h18v-30zm96 0v30h18v-30zm53.2 0 60.8 60.8v-25.6L373.8 105zm78.8 0v382h30V105zm-258 48v30h174v-30zm-66 142v162l306 .1V295zm18 18h240.8l-60 30H121zm270 5.6V343h-48.8zM121 361h144.8l-60 30H121zm185.2 0H391v30H246.2zM121 409h48.8L121 433.4zm89.2 0H391v30.1l-240.8-.1z" />
      </G>
    </Svg>
  );
};