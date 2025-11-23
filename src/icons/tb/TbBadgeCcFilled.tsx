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

export const TbBadgeCcFilled = (props: IconProps) => {
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
        <Path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM8.5 8A2.5 2.5 0 0 0 6 10.5v3a2.5 2.5 0 1 0 5 0 1 1 0 0 0-2 0 .5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0 1 1 0 0 0 2 0A2.5 2.5 0 0 0 8.5 8m7 0a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 1 0 5 0 1 1 0 0 0-2 0 .5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0 1 1 0 0 0 2 0A2.5 2.5 0 0 0 15.5 8" />
      </G>
    </Svg>
  );
};