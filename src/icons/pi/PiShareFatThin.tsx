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

export const PiShareFatThin = (props: IconProps) => {
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
        <Path d="m234.83 109.17-80-80A4 4 0 0 0 148 32v44.09c-54 2.44-120.43 53.55-127.94 119a7.87 7.87 0 0 0 4.58 8.16 8 8 0 0 0 3.41.77 7.9 7.9 0 0 0 5.79-2.55c11.53-12.27 53.29-51.73 114.16-53.4V192a4 4 0 0 0 6.83 2.83l80-80a4 4 0 0 0 0-5.66M156 182.33V144a4 4 0 0 0-4-4c-27.39 0-54.08 7.17-79.34 21.3A189.9 189.9 0 0 0 28 196l2.92 2.74L28 196c3.36-29.21 19.55-57.48 45.6-79.57C97.53 96.11 126.83 84 152 84a4 4 0 0 0 4-4V41.66L226.34 112Z" />
      </G>
    </Svg>
  );
};