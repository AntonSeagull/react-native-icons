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

export const PiStackOverflowLogoFill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-73.14 14.86a8 8 0 0 1 11.32 0l45.25 45.26a8 8 0 0 1-11.31 11.31l-45.26-45.25a8 8 0 0 1 0-11.32m-34.68 51.91a8 8 0 0 1 10.45-4.33l59.13 24.49a8 8 0 0 1-3.06 15.4 7.9 7.9 0 0 1-3.06-.62l-59.13-24.49a8 8 0 0 1-4.33-10.45M96 152h64a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16m104 40a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v40h112v-40a8 8 0 0 1 16 0Z" />
      </G>
    </Svg>
  );
};