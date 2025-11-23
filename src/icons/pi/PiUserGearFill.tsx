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

export const PiUserGearFill = (props: IconProps) => {
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
        <Path d="M198.13 194.85A8 8 0 0 1 192 208H24a8 8 0 0 1-6.12-13.15c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17M255.18 154a8 8 0 0 1-6.94 4 7.9 7.9 0 0 1-4-1.07l-4.67-2.7a23.9 23.9 0 0 1-7.58 4.39V164a8 8 0 0 1-16 0v-5.38a23.9 23.9 0 0 1-7.58-4.39l-4.67 2.7a7.9 7.9 0 0 1-4 1.07 8 8 0 0 1-4-14.93l4.66-2.69a23.6 23.6 0 0 1 0-8.76l-4.66-2.69a8 8 0 1 1 8-13.86l4.67 2.7a23.9 23.9 0 0 1 7.58-4.39V108a8 8 0 0 1 16 0v5.38a23.9 23.9 0 0 1 7.58 4.39l4.67-2.7a8 8 0 1 1 8 13.86l-4.66 2.69a23.6 23.6 0 0 1 0 8.76l4.66 2.69a8 8 0 0 1 2.94 10.93M224 144a8 8 0 1 0-8-8 8 8 0 0 0 8 8" />
      </G>
    </Svg>
  );
};