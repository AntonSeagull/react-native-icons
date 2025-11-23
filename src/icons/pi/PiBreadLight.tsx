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

export const PiBreadLight = (props: IconProps) => {
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
        <Path d="M238 80a38 38 0 0 0-38-38H48a38 38 0 0 0-14 73.32V200a14 14 0 0 0 14 14h152a14 14 0 0 0 14-14v-84.68A38.07 38.07 0 0 0 238 80M46 200v-82h2a6 6 0 0 0 0-12 26 26 0 0 1 0-52h96a26 26 0 0 1 0 52 6 6 0 0 0 0 12h2v82a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2m154-94a6 6 0 0 0 0 12h2v82a2 2 0 0 1-2 2h-42.16a15 15 0 0 0 .16-2v-84.68A38 38 0 0 0 171.68 54H200a26 26 0 0 1 0 52" />
      </G>
    </Svg>
  );
};