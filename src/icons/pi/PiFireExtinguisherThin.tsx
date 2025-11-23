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

export const PiFireExtinguisherThin = (props: IconProps) => {
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
        <Path d="m217.15 52.17-70.34-21.1 39-19.49a4 4 0 1 0-3.58-7.16L135 28a76.07 76.07 0 0 0-75 76v104a4 4 0 0 0 8 0v-36h24v60a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12V104a44.06 44.06 0 0 0-40-43.81V37.38l74.85 22.45A3.8 3.8 0 0 0 216 60a4 4 0 0 0 1.15-7.83M68 164v-60a68.08 68.08 0 0 1 64-67.87v24.06A44.06 44.06 0 0 0 92 104v60Zm100 72h-64a4 4 0 0 1-4-4v-60h72v60a4 4 0 0 1-4 4m4-132v60h-72v-60a36 36 0 0 1 72 0" />
      </G>
    </Svg>
  );
};