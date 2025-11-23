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

export const PiBugBeetle = (props: IconProps) => {
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
        <Path d="M208 152h16a8 8 0 0 0 0-16h-16v-16h16a8 8 0 0 0 0-16h-16.4a79.76 79.76 0 0 0-21.44-46.85l19.5-19.49a8 8 0 0 0-11.32-11.32l-20.29 20.3a79.74 79.74 0 0 0-92.1 0l-20.29-20.3a8 8 0 0 0-11.32 11.32l19.5 19.49A79.76 79.76 0 0 0 48.4 104H32a8 8 0 0 0 0 16h16v16H32a8 8 0 0 0 0 16h16v8c0 2.7.14 5.37.4 8H32a8 8 0 0 0 0 16h19.68a80 80 0 0 0 152.64 0H224a8 8 0 0 0 0-16h-16.4c.26-2.63.4-5.3.4-8ZM128 48a64.07 64.07 0 0 1 63.48 56h-127A64.07 64.07 0 0 1 128 48m8 175.48V144a8 8 0 0 0-16 0v79.48A64.07 64.07 0 0 1 64 160v-40h128v40a64.07 64.07 0 0 1-56 63.48" />
      </G>
    </Svg>
  );
};