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

export const PiKeyLight = (props: IconProps) => {
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
        <Path d="M215.15 40.85A78 78 0 0 0 86.2 121.31l-56.1 56.1a13.94 13.94 0 0 0-4.1 9.9V216a14 14 0 0 0 14 14h32a6 6 0 0 0 6-6v-18h18a6 6 0 0 0 6-6v-18h18a6 6 0 0 0 4.24-1.76l10.45-10.44A77.6 77.6 0 0 0 160 174h.1a78 78 0 0 0 55.05-133.15M226 98.16c-1.12 35.16-30.67 63.8-65.88 63.84a65.9 65.9 0 0 1-24.51-4.67 6 6 0 0 0-6.64 1.26L117.51 170H96a6 6 0 0 0-6 6v18H72a6 6 0 0 0-6 6v18H40a2 2 0 0 1-2-2v-28.69a2 2 0 0 1 .58-1.41l58.83-58.83a6 6 0 0 0 1.26-6.64A65.6 65.6 0 0 1 94 95.92c0-35.21 28.68-64.76 63.83-65.92A66 66 0 0 1 226 98.16M190 76a10 10 0 1 1-10-10 10 10 0 0 1 10 10" />
      </G>
    </Svg>
  );
};