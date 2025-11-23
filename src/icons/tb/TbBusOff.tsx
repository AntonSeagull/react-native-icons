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

export const TbBusOff = (props: IconProps) => {
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
        <Path d="M4 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16.18 16.172a2 2 0 0 0 2.652 2.648" />
        <Path d="M4 17H2V6a1 1 0 0 1 1-1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0H8" />
        <Path d="m16 5 1.5 7H22M2 10h8m4 0h3M7 7v3M12 5v3M3 3l18 18" />
      </G>
    </Svg>
  );
};