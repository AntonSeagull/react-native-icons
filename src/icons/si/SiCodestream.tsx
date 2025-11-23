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

export const SiCodestream = (props: IconProps) => {
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
        <Path d="M10.54 18.246a6.46 6.46 0 0 1 0-12.58V1.22a.432.432 0 0 0-.745-.294l-9.36 9.971a1.61 1.61 0 0 0 0 2.201l9.36 9.976a.432.432 0 0 0 .746-.295zm2.92 0a6.46 6.46 0 0 0 0-12.58V1.22a.432.432 0 0 1 .746-.294l9.36 9.971a1.61 1.61 0 0 1 0 2.201l-9.36 9.976a.432.432 0 0 1-.747-.295zm2.263-6.29a3.728 3.73 0 0 1-3.728 3.73 3.728 3.73 0 0 1-3.727-3.73 3.728 3.73 0 0 1 3.727-3.731 3.728 3.73 0 0 1 3.728 3.73" />
      </G>
    </Svg>
  );
};