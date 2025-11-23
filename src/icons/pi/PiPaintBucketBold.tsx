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

export const PiPaintBucketBold = (props: IconProps) => {
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
        <Path d="M235.79 142.88a12 12 0 0 0 4.7-19.87L125 7.52a12 12 0 0 0-17 0L70.25 45.29 48.48 23.52a12 12 0 0 0-17 17l21.8 21.74-41.08 41.09a28 28 0 0 0 0 39.6l84.86 84.86a28 28 0 0 0 39.6 0L214.48 150Zm-31.58-14.77a12 12 0 0 0-4.7 2.9l-79.82 79.83a4 4 0 0 1-5.66 0L29.17 126a4 4 0 0 1 0-5.66l41.08-41.1 24.29 24.29a32 32 0 0 0 52.09 35.11 32 32 0 0 0-35.12-52.08l-24.28-24.3L116.52 33l93.27 93.28Zm-85.87-17.75a8 8 0 1 1-.06.06ZM256 208a24 24 0 0 1-48 0c0-19.44 12.93-37.23 14.4-39.2a12 12 0 0 1 19.2 0c1.47 1.98 14.4 19.77 14.4 39.2" />
      </G>
    </Svg>
  );
};