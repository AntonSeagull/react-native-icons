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

export const LuSquaresIntersect = (props: IconProps) => {
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
        <Path d="M10 22a2 2 0 0 1-2-2M14 2a2 2 0 0 1 2 2M16 22h-2M2 10V8M2 4a2 2 0 0 1 2-2M20 8a2 2 0 0 1 2 2M22 14v2M22 20a2 2 0 0 1-2 2M4 16a2 2 0 0 1-2-2M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1zM8 2h2" />
      </G>
    </Svg>
  );
};