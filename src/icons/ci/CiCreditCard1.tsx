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

export const CiCreditCard1 = (props: IconProps) => {
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
        <Path d="M19.44 5.14H4.56a2.5 2.5 0 0 0-2.5 2.5v8.72a2.5 2.5 0 0 0 2.5 2.5h14.88a2.5 2.5 0 0 0 2.5-2.5V7.64a2.5 2.5 0 0 0-2.5-2.5M3.06 7.64a1.5 1.5 0 0 1 1.5-1.5h14.88a1.5 1.5 0 0 1 1.5 1.5v.5H3.06Zm17.88 8.72a1.5 1.5 0 0 1-1.5 1.5H4.56a1.5 1.5 0 0 1-1.5-1.5V9.64h17.88Z" />
        <Path d="M8.063 14.247h-3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1M18.934 14.25h-6.5a.5.5 0 1 1 0-1h6.5a.5.5 0 0 1 0 1" />
      </G>
    </Svg>
  );
};