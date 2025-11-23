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

export const PiStackOverflowLogo = (props: IconProps) => {
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
        <Path d="M216 152.09V216a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-63.91a8 8 0 0 1 16 0V208h144v-55.91a8 8 0 0 1 16 0m-128 32h80a8 8 0 1 0 0-16H88a8 8 0 1 0 0 16m4.88-53 77.27 20.68a8 8 0 0 0 2.08.28 8 8 0 0 0 2.07-15.71L97 115.61A8 8 0 1 0 92.88 131Zm18.45-49.93 69.28 40a8 8 0 0 0 10.93-2.93 8 8 0 0 0-2.93-10.91l-69.28-40.05a8 8 0 1 0-8 13.84Zm87.33 13A8 8 0 1 0 210 82.84l-56.57-56.5a8 8 0 0 0-11.32 11.3Z" />
      </G>
    </Svg>
  );
};