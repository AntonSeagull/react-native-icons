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

export const PiBracketsRoundBold = (props: IconProps) => {
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
        <Path d="M82.33 222.19a12 12 0 0 1-16.5 4.09C64 225.16 20 198 20 128s44-97.16 45.83-98.28a12 12 0 0 1 12.41 20.53C76.71 51.21 44 72.31 44 128s32.85 76.88 34.25 77.75a12 12 0 0 1 4.08 16.44M190.17 29.72a12 12 0 1 0-12.42 20.53c1.4.87 34.25 21.94 34.25 77.75s-32.85 76.88-34.17 77.7a12 12 0 1 0 12.34 20.58C192 225.16 236 198 236 128s-44-97.16-45.83-98.28" />
      </G>
    </Svg>
  );
};