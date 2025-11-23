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

export const ImnDollar = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M7.5 1a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15m0 13.5a6 6 0 1 1 0-12 6 6 0 0 1 0 12M8 8V6h2V5H8V4H7v1H5v4h2v2H5v1h2v1h1v-1h2V8zM7 8H6V6h1zm2 3H8V9h1z" />
      </G>
    </Svg>
  );
};