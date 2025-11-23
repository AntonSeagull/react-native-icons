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

export const TbBoxMultipleFilled = (props: IconProps) => {
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
        <Path d="M6 5.667A3.667 3.667 0 0 1 9.667 2h8.666A3.667 3.667 0 0 1 22 5.667v8.666A3.667 3.667 0 0 1 18.333 18H9.667A3.667 3.667 0 0 1 6 14.333z" />
        <Path d="M2 9c0-1.094.533-1.828 1.514-2.374a1 1 0 1 1 .972 1.748C4.088 8.595 4 8.716 4 9v10c0 .548.452 1 1 1h9.998c.32 0 .618-.154.805-.407l.065-.1a1 1 0 1 1 1.738.99A3 3 0 0 1 15 22H5c-1.652 0-3-1.348-3-3z" />
      </G>
    </Svg>
  );
};