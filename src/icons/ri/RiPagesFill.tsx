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

export const RiPagesFill = (props: IconProps) => {
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
        <Path d="M20 22H4a1 1 0 0 1-1-1V8h18v13a1 1 0 0 1-1 1m1-16H3V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM7 11v4h4v-4zm0 6v2h10v-2zm6-5v2h4v-2z" />
      </G>
    </Svg>
  );
};