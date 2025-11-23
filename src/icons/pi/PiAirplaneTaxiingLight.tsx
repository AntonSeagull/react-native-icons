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

export const PiAirplaneTaxiingLight = (props: IconProps) => {
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
        <Path d="M208 98h-61.51l-46.24-46.24A6 6 0 0 0 96 50h-8a14 14 0 0 0-13.27 18.43L84.59 98h-26.1L36.25 75.76A6 6 0 0 0 32 74h-8a14 14 0 0 0-13.4 18l14.07 46.9a37.77 37.77 0 0 0 36.4 27.1H240a6 6 0 0 0 6-6v-24a38 38 0 0 0-38-38m26 56H61.07a25.86 25.86 0 0 1-24.91-18.53L22.1 88.57a1.91 1.91 0 0 1 .31-1.76A1.93 1.93 0 0 1 24 86h5.51l22.24 22.24A6 6 0 0 0 56 110h36.91a6 6 0 0 0 5.69-7.9L86.11 64.63A2 2 0 0 1 88 62h5.51l46.24 46.24A6 6 0 0 0 144 110h64a26 26 0 0 1 26 26Zm-12 46a14 14 0 1 1-14-14 14 14 0 0 1 14 14m-96 0a14 14 0 1 1-14-14 14 14 0 0 1 14 14" />
      </G>
    </Svg>
  );
};