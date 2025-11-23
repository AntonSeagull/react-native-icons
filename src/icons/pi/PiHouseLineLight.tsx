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

export const PiHouseLineLight = (props: IconProps) => {
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
        <Path d="M240 210h-18v-78.83l5.76 5.76a6 6 0 0 0 8.48-8.49L137.9 30.09a14 14 0 0 0-19.8 0l-98.34 98.35a6 6 0 0 0 8.48 8.49l5.76-5.76V210H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M46 119.17l80.58-80.59a2 2 0 0 1 2.84 0L210 119.17V210h-52v-58a6 6 0 0 0-6-6h-48a6 6 0 0 0-6 6v58H46ZM146 210h-36v-52h36Z" />
      </G>
    </Svg>
  );
};