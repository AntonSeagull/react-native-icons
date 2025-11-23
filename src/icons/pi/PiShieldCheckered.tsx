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

export const PiShieldCheckered = (props: IconProps) => {
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
        <Path d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19 23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 16v56c0 2.71-.08 5.37-.23 8H136V56ZM48 56h72v64H48.23c-.15-2.63-.23-5.29-.23-8Zm2.06 80H120v84.55a130.9 130.9 0 0 1-30.93-18.74c-21.15-17.3-34.2-39.37-38.99-65.81Zm117.34 65.42a131.3 131.3 0 0 1-31.4 19.11V136h69.91c-4.75 26.24-17.64 48.18-38.51 65.42" />
      </G>
    </Svg>
  );
};