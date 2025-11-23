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

export const GiCableStayedBridge = (props: IconProps) => {
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
        <Path d="M113 41v446h30V41zM95 60.35 18 114.9v22l77-54.5zm66 0V82.4L483.8 311H494v-14.7zM95 98.59 18 170.8v24.7l77-72.2zm66 0v24.71L361.2 311h26.4zm0 49.81v34.4L239.9 311h21.2zm-66 .1L18 273.6v34.3l77-125.1zM18 329v30h77v-30zm143 0v30h333v-30z" />
      </G>
    </Svg>
  );
};