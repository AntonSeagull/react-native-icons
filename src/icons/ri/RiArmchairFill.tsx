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

export const RiArmchairFill = (props: IconProps) => {
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
        <Path d="M16 3H8a4 4 0 0 0-4 4v1a5 5 0 0 1 5 5h6a5 5 0 0 1 5-5V7a4 4 0 0 0-4-4m4 7a3 3 0 0 0-3 3v3h-2v-1H9v1H7v-3a3 3 0 1 0-4 2.83V21h2v-1h14v1h2v-5.17A3.001 3.001 0 0 0 20 10" />
      </G>
    </Svg>
  );
};