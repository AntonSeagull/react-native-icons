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

export const PiCurrencyInrBold = (props: IconProps) => {
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
        <Path d="M212 80a12 12 0 0 1-12 12h-28a64.07 64.07 0 0 1-64 64h-5l65 59.12a12 12 0 1 1-16.14 17.76l-88-80A12 12 0 0 1 72 132h36a40 40 0 0 0 40-40H72a12 12 0 0 1 0-24h68a40 40 0 0 0-32-16H72a12 12 0 0 1 0-24h128a12 12 0 0 1 0 24h-42.09a64 64 0 0 1 9.4 16H200a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};