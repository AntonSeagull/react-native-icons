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

export const PiArrowsInSimpleDuotone = (props: IconProps) => {
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
        <Path d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity={0.2} />
        <Path d="M213.66 53.66 163.31 104H192a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8V64a8 8 0 0 1 16 0v28.69l50.34-50.35a8 8 0 0 1 11.32 11.32M112 136H64a8 8 0 0 0 0 16h28.69l-50.35 50.34a8 8 0 0 0 11.32 11.32L104 163.31V192a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8" />
      </G>
    </Svg>
  );
};