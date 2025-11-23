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

export const PiHeadlightsBold = (props: IconProps) => {
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
        <Path d="M164 80a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24h-64a12 12 0 0 1-12-12m76 84h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m0-48h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m-92-52v128a20 20 0 0 1-20 20H88a84 84 0 0 1-84-84.63C4.34 81.4 42.43 44 88.9 44H128a20 20 0 0 1 20 20m-24 4H88.9C55.57 68 28.25 94.71 28 127.54A60 60 0 0 0 88 188h36Z" />
      </G>
    </Svg>
  );
};