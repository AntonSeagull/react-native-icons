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

export const PiWheelchairMotionDuotone = (props: IconProps) => {
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
        <Path d="M200 48a24 24 0 1 1-24-24 24 24 0 0 1 24 24" opacity={0.2} />
        <Path d="M176 80a32 32 0 1 0-32-32 32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16 16 16 0 0 1 16-16m-8 136a64 64 0 1 1-64-64 8 8 0 0 1 0 16 48 48 0 1 0 48 48 8 8 0 0 1 16 0m38.19-37.07a8 8 0 0 1 1.65 6.64l-16 80A8 8 0 0 1 184 224a7.8 7.8 0 0 1-1.58-.16 8 8 0 0 1-6.27-9.41L190.24 144H128a8 8 0 0 1-6.94-12l20.06-34.9a80.09 80.09 0 0 0-88 9.17A8 8 0 1 1 42.91 94a96 96 0 0 1 113.46-6.42 8 8 0 0 1 2.57 10.69L141.82 128H200a8 8 0 0 1 6.19 2.93" />
      </G>
    </Svg>
  );
};