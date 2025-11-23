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

export const PiUserCirclePlusFill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M128 76a44 44 0 1 1-44 44 44 44 0 0 1 44-44m48-12h16v16a8 8 0 0 0 16 0V64h16a8 8 0 0 0 0-16h-16V32a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16m45.35 40.11a8 8 0 0 0-6.57 9.21A89 89 0 0 1 216 128a87.62 87.62 0 0 1-22.24 58.41A79.9 79.9 0 0 0 172 165.1a4 4 0 0 0-4.84.32 59.81 59.81 0 0 1-78.27 0 4 4 0 0 0-4.89-.32 79.7 79.7 0 0 0-21.79 21.31A88 88 0 0 1 128 40a89 89 0 0 1 14.68 1.22 8 8 0 0 0 2.64-15.78 103.92 103.92 0 1 0 85.24 85.24 8 8 0 0 0-9.21-6.57" />
      </G>
    </Svg>
  );
};