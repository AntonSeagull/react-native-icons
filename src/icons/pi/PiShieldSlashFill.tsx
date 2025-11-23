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

export const PiShieldSlashFill = (props: IconProps) => {
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
        <Path d="M224 56v56c0 25.24-5.85 45.72-14.3 62.14a4 4 0 0 1-6.53.87L86.52 46.69a4 4 0 0 1 3-6.69H208a16 16 0 0 1 16 16M53.92 34.62A8 8 0 0 0 40.26 42 16 16 0 0 0 32 56v56c0 52.72 25.52 84.67 46.93 102.19 23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53a132 132 0 0 0 10.05-9.19l14.9 16.38a8 8 0 1 0 11.84-10.76Z" />
      </G>
    </Svg>
  );
};