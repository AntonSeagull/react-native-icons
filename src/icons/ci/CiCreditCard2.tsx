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

export const CiCreditCard2 = (props: IconProps) => {
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
        <Path d="M19.437 18.859H4.563a2.5 2.5 0 0 1-2.5-2.5V7.641a2.5 2.5 0 0 1 2.5-2.5h14.874a2.5 2.5 0 0 1 2.5 2.5v8.718a2.5 2.5 0 0 1-2.5 2.5M4.563 6.141a1.5 1.5 0 0 0-1.5 1.5v8.718a1.5 1.5 0 0 0 1.5 1.5h14.874a1.5 1.5 0 0 0 1.5-1.5V7.641a1.5 1.5 0 0 0-1.5-1.5Z" />
        <Path d="M8.063 14.247h-3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1M18.934 14.249h-6.5a.5.5 0 0 1 0-1h6.5a.5.5 0 0 1 0 1" />
        <Rect width={2} height={4} x={16.434} y={7.14} rx={0.5} transform="rotate(-90 17.434 9.14)" />
      </G>
    </Svg>
  );
};