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

export const PiFourKDuotone = (props: IconProps) => {
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
        <Path d="M224 48v160H32V48Z" opacity={0.2} />
        <Path d="M24 48a8 8 0 0 1 8-8h192a8 8 0 0 1 0 16H32a8 8 0 0 1-8-8m200 152H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16M144 72a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0v-29l13.09-15 28 48a8 8 0 1 0 13.82-8l-30.7-52.63L206 85.27a8 8 0 1 0-12-10.54l-42 48V80a8 8 0 0 0-8-8M88 176v-16H40a8 8 0 0 1-6.31-12.91l56-72A8 8 0 0 1 104 80v64h8a8 8 0 0 1 0 16h-8v16a8 8 0 0 1-16 0m0-32v-40.68L56.36 144Z" />
      </G>
    </Svg>
  );
};