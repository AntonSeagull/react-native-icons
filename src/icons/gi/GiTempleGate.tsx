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

export const GiTempleGate = (props: IconProps) => {
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
        <Path d="M256 26.92 28.98 183H483zm0 26.29L427.9 167H84.1zm0 21.58L143.9 149h224.2zM73 201v286h30V201zm48 0v286h126V377H137v-54h110V201zm144 0v122h110v54H265v110h126V201zm144 0v286h30V201zM155 341v18h202v-18zm37 50c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25m128 0c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25m-128 18c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7m128 0c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7" />
      </G>
    </Svg>
  );
};