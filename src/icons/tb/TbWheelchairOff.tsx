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

export const TbWheelchairOff = (props: IconProps) => {
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
        <Path d="M3 16a5 5 0 1 0 10 0 5 5 0 1 0-10 0M17.582 17.59a2 2 0 0 0 2.833 2.824M14 14h-1.4M6 6v5M6 8h2m4 0h5M15 8v3M3 3l18 18" />
      </G>
    </Svg>
  );
};