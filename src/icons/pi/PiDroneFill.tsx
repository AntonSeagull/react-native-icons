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

export const PiDroneFill = (props: IconProps) => {
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
        <Path d="M189.66 77.66 160 107.31v41.38l29.66 29.65a8 8 0 0 1-11.32 11.32L148.69 160h-41.38l-29.65 29.66a8 8 0 0 1-11.32-11.32L96 148.69v-41.38L66.34 77.66a8 8 0 0 1 11.32-11.32L107.31 96h41.38l29.65-29.66a8 8 0 0 1 11.32 11.32m-46.28-6.12a8 8 0 0 0 10.21-4.87 28 28 0 1 1 35.74 35.74A8 8 0 0 0 192 118a7.9 7.9 0 0 0 2.67-.46 44 44 0 1 0-56.16-56.16 8 8 0 0 0 4.87 10.16m51.29 67a8 8 0 0 0-5.34 15.08 28 28 0 1 1-35.74 35.74 8 8 0 0 0-15.08 5.34 44 44 0 1 0 56.16-56.16m-82 46a8 8 0 0 0-10.21 4.87 28 28 0 1 1-35.74-35.74 8 8 0 0 0-5.34-15.08 44 44 0 1 0 56.16 56.16 8 8 0 0 0-4.92-10.29Zm-51.29-67A7.9 7.9 0 0 0 64 118a8 8 0 0 0 2.67-15.54 28 28 0 1 1 35.74-35.74 8 8 0 1 0 15.08-5.34 44 44 0 1 0-56.16 56.16Z" />
      </G>
    </Svg>
  );
};