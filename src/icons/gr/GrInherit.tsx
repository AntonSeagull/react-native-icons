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

export const GrInherit = (props: IconProps) => {
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
        <Path fill="none" stroke="#231F20" strokeWidth={2} d="m17 18-5-3zM7 18l5-3v-4m5 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM17 6a5 5 0 1 1-10.001-.001A5 5 0 0 1 17 6Z" />
      </G>
    </Svg>
  );
};