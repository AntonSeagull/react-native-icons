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

export const GiAbstract058 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M21 21v228.569h168.172v115.56h-21.003V270.98H21v220.02h470V270.98H343.831v94.147h-21.003v-115.56H491V21h-35.103v145.113H347.063V21H310.49v145.113H201.656V21h-36.719v145.113H56.104V21z" />
      </G>
    </Svg>
  );
};