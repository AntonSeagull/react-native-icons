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

export const PiCameraSlashFill = (props: IconProps) => {
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
        <Path d="M232 80v112a24.5 24.5 0 0 1-.45 4.65 4 4 0 0 1-6.9 2L86 46.08a4 4 0 0 1-.37-4.91l3.74-5.61A8 8 0 0 1 96 32h64a8 8 0 0 1 6.66 3.56L180.28 56H208a24 24 0 0 1 24 24m-18.08 130.62a8 8 0 1 1-11.84 10.76l-4.89-5.38H48a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h3.73l-9.65-10.62a8 8 0 1 1 11.84-10.76ZM148 161.92l-47.88-52.68A36 36 0 0 0 148 161.92" />
      </G>
    </Svg>
  );
};