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

export const LuCircleDotDashed = (props: IconProps) => {
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
        <Path d="M10.1 2.18a9.9 9.9 0 0 1 3.8 0M17.6 3.71a10 10 0 0 1 2.69 2.7M21.82 10.1a9.9 9.9 0 0 1 0 3.8M20.29 17.6a10 10 0 0 1-2.7 2.69M13.9 21.82a9.9 9.9 0 0 1-3.8 0M6.4 20.29a10 10 0 0 1-2.69-2.7M2.18 13.9a9.9 9.9 0 0 1 0-3.8M3.71 6.4a10 10 0 0 1 2.7-2.69" />
        <Circle cx={12} cy={12} r={1} />
      </G>
    </Svg>
  );
};