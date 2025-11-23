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

export const RiServerFill = (props: IconProps) => {
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
        <Path d="M4 3h16a1 1 0 0 1 1 1v7H3V4a1 1 0 0 1 1-1M3 13h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 3v2h3v-2zM7 6v2h3V6z" />
      </G>
    </Svg>
  );
};