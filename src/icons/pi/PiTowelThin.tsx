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

export const PiTowelThin = (props: IconProps) => {
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
        <Path d="M200 28H72a20 20 0 0 0-20 20v168a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12V48a12 12 0 0 1 24 0v104a4 4 0 0 0 8 0V48a20 20 0 0 0-20-20M72 36h112a19.86 19.86 0 0 0-4 12v140H60V48a12 12 0 0 1 12-12m104 184H64a4 4 0 0 1-4-4v-20h120v20a4 4 0 0 1-4 4" />
      </G>
    </Svg>
  );
};