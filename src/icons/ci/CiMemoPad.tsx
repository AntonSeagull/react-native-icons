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

export const CiMemoPad = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M17.44 2.065H6.56a2.507 2.507 0 0 0-2.5 2.5v14.87a2.507 2.507 0 0 0 2.5 2.5h10.88a2.5 2.5 0 0 0 2.5-2.5V4.565a2.5 2.5 0 0 0-2.5-2.5m1.5 17.37a1.5 1.5 0 0 1-1.5 1.5H6.56a1.5 1.5 0 0 1-1.5-1.5V6.505h13.88Z" />
        <Path d="M7.549 9.506a.5.5 0 0 1 0-1h8.909a.5.5 0 0 1 0 1ZM7.549 12.506a.5.5 0 0 1 0-1h6.5a.5.5 0 0 1 0 1ZM7.566 18.374a.5.5 0 1 1 0-1h3.251a.5.5 0 0 1 0 1Z" />
      </G>
    </Svg>
  );
};