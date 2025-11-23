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

export const VscThumbsdownFilled = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5.46 14.11a1.46 1.46 0 0 1-.81-.25 1.38 1.38 0 0 1-.45-1.69L5.17 10H2.38a1.36 1.36 0 0 1-1.16-.61 1.35 1.35 0 0 1-.09-1.32C1.8 6.62 3 4 3.4 2.9A1.38 1.38 0 0 1 4.69 2h8.93A1.4 1.4 0 0 1 15 3.4v3.51a1.38 1.38 0 0 1-1.38 1.38h-1.38L6.4 13.75a1.4 1.4 0 0 1-.94.36" />
      </G>
    </Svg>
  );
};