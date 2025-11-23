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

export const PiStackOverflowLogoThin = (props: IconProps) => {
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
        <Path d="M212 152.09V216a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-63.91a4 4 0 0 1 8 0V212h152v-59.91a4 4 0 0 1 8 0m-124 28h80a4 4 0 1 0 0-8H88a4 4 0 1 0 0 8m5.92-52.86 77.27 20.67a3.7 3.7 0 0 0 1 .14 4 4 0 0 0 1-7.85L96 119.47a4 4 0 1 0-2.07 7.72Zm19.41-49.54 69.28 39.95a4 4 0 1 0 4-6.92l-69.28-39.99a4 4 0 1 0-4 6.92Zm88.16 13.66a4 4 0 0 0 5.66-5.64l-56.57-56.5a4 4 0 1 0-5.66 5.65Z" />
      </G>
    </Svg>
  );
};