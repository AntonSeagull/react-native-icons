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

export const GrObjectGroup = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M1 1h3v3H1zm19 0h3v3h-3zM4 2h16M4 22h16M1 20h3v3H1zm19 0h3v3h-3zM2 4v16M22 4v16M7 7h7v6H7zm10 3v7h-7v-2" />
      </G>
    </Svg>
  );
};