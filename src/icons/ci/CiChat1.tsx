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

export const CiChat1 = (props: IconProps) => {
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
        <Path d="M3.316 19.937a1.25 1.25 0 0 1-1.251-1.247v-1.716L2.068 6.56a2.5 2.5 0 0 1 2.5-2.5H19.44a2.5 2.5 0 0 1 2.5 2.5v8.41a2.5 2.5 0 0 1-2.5 2.5H6.918a1.5 1.5 0 0 0-1.06.439L4.2 19.57a1.25 1.25 0 0 1-.884.367M4.568 5.062a1.5 1.5 0 0 0-1.5 1.5L3.06 16.973v1.714a.25.25 0 0 0 .427.176L5.151 17.2a2.48 2.48 0 0 1 1.767-.732H19.44a1.5 1.5 0 0 0 1.5-1.5V6.562a1.5 1.5 0 0 0-1.5-1.5Z" data-name="Chat 1" />
      </G>
    </Svg>
  );
};