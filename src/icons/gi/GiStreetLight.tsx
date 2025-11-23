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

export const GiStreetLight = (props: IconProps) => {
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
        <Path d="m262.5 33-10 30h87l-10-30zM160 39c-26 0-45.2 9.12-56.9 23.24C91.32 76.35 87 94.5 87 112v263h18V112c0-14.5 3.7-28.35 11.9-38.24C125.2 63.88 138 57 160 57h75.5l6-18zm79.3 42-43.7 42.5 41.9-19.1-34.5 86.9 62.6-58.3-1.1 91.7 31.8-101.2 70.5 117.6-31.3-130.9 61.5 36.1L349.5 81zM72.55 393l-5.08 100h57.03l-5.1-100z" />
      </G>
    </Svg>
  );
};