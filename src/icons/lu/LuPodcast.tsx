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

export const LuPodcast = (props: IconProps) => {
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
        <Path fill="currentColor" d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 0 0 1 0z" />
        <Path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
        <Path d="M8 14a5 5 0 1 1 8 0" />
        <Circle cx={12} cy={11} r={1} fill="currentColor" />
      </G>
    </Svg>
  );
};