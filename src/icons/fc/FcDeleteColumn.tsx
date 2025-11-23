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

export const FcDeleteColumn = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#90CAF9" d="M30 5H18c-2.2 0-4 1.8-4 4v30c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V9c0-2.2-1.8-4-4-4M18 39V9h12v30z" />
        <Circle cx={38} cy={38} r={10} fill="#F44336" />
        <Path d="m43.31 41.182-2.12 2.12-8.484-8.483 2.12-2.121z" />
        <Path d="m34.819 43.31-2.121-2.12 8.484-8.484 2.12 2.12z" />
      </G>
    </Svg>
  );
};