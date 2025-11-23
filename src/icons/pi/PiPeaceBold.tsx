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

export const PiPeaceBold = (props: IconProps) => {
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
        <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m84 108a83.4 83.4 0 0 1-9 37.84l-63-44.09V44.87A84.12 84.12 0 0 1 212 128m-96-83.13v76.88l-63 44.09a83.93 83.93 0 0 1 63-121ZM66.83 185.48 116 151.05v60.08a83.86 83.86 0 0 1-49.17-25.65M140 211.13v-60.08l49.17 34.43A83.86 83.86 0 0 1 140 211.13" />
      </G>
    </Svg>
  );
};