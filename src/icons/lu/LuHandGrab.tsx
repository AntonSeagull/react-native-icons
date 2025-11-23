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

export const LuHandGrab = (props: IconProps) => {
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
        <Path d="M18 11.5V9a2 2 0 0 0-2-2 2 2 0 0 0-2 2v1.4M14 10V8a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2M10 9.9V9a2 2 0 0 0-2-2 2 2 0 0 0-2 2v5M6 14a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
        <Path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
      </G>
    </Svg>
  );
};