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

export const Imwer = (props: IconProps) => {
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
        <Path d="m15.89 10.188-4-5A.5.5 0 0 0 11.5 5h-7a.5.5 0 0 0-.39.188l-4 5A.5.5 0 0 0 0 10.5V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5a.5.5 0 0 0-.11-.312M15 11h-3.5l-2 2h-3l-2-2H1v-.325L4.74 6h6.519l3.74 4.675z" />
        <Path d="M11.5 8h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1M12.5 10h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1" />
      </G>
    </Svg>
  );
};