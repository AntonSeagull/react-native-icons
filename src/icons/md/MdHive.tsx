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

export const MdHive = (props: IconProps) => {
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
        <Path d="m13.79 8 1.8-3-1.8-3h-3.58l-1.8 3 1.8 3zM10.21 9l-1.8 3 1.8 3h3.58l1.8-3-1.8-3zM16.45 11.51h3.59l1.79-3-1.79-3h-3.59l-1.8 3zM20.04 12.51h-3.59l-1.8 3 1.8 3h3.59l1.79-3zM7.55 11.51l1.8-3-1.8-3H3.96l-1.79 3 1.79 3zM7.55 12.51H3.96l-1.79 3 1.79 3h3.59l1.8-3zM10.21 16l-1.8 3 1.8 3h3.58l1.8-3-1.8-3z" />
      </G>
    </Svg>
  );
};