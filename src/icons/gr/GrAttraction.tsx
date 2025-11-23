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

export const GrAttraction = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="m13 2 1.5.5L13 3zm1 16 1 5h-2zm0-1.5 2 6.5h-4zM12 6l9 5v2H3v-2zm-7.5 7h15c0 4.167 1.5 10 1.5 10H3s1.5-5.833 1.5-10Zm0 0h15c0 4.167 1.5 10 1.5 10H3s1.5-5.833 1.5-10Z" />
      </G>
    </Svg>
  );
};