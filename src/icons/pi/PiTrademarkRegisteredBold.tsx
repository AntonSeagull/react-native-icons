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

export const PiTrademarkRegisteredBold = (props: IconProps) => {
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
        <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84m28.7-70.58A36 36 0 0 0 136 76h-32a12 12 0 0 0-12 12v80a12 12 0 0 0 24 0v-20h16.24L150 174.66a12 12 0 0 0 20-13.32ZM116 100h20a12 12 0 0 1 0 24h-20Z" />
      </G>
    </Svg>
  );
};