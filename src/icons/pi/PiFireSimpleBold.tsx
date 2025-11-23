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

export const PiFireSimpleBold = (props: IconProps) => {
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
        <Path d="M145.93 14.77A12 12 0 0 0 127 19.89L107.07 74.5 87.38 55.39a12 12 0 0 0-17.9 1.33C47.27 85.82 36 115.19 36 144a92 92 0 0 0 184 0c0-61.15-51.8-110.75-74.07-129.23M128 212a68.07 68.07 0 0 1-68-68c0-19.94 7-40.62 20.71-61.64l22.93 22.25a12 12 0 0 0 19.63-4.5l20.21-55.4C165.39 65.61 196 102.29 196 144a68.07 68.07 0 0 1-68 68" />
      </G>
    </Svg>
  );
};