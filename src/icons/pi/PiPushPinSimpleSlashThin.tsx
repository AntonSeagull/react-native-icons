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

export const PiPushPinSimpleSlashThin = (props: IconProps) => {
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
        <Path d="M87.25 40a4 4 0 0 1 4-4H192a4 4 0 0 1 0 8h-11.23l19.58 111a4 4 0 0 1-3.24 4.63 3.3 3.3 0 0 1-.7.07 4 4 0 0 1-3.93-3.31L172.64 44H91.25a4 4 0 0 1-4-4m123.44 179a4 4 0 0 1-5.65-.27L169.87 180H132v60a4 4 0 0 1-8 0v-60H40a4 4 0 0 1 0-8h12.64L70.52 70.72 45 42.69a4 4 0 0 1 6-5.38l160 176a4 4 0 0 1-.31 5.69m-48.1-47L77.32 78.2 60.77 172Z" />
      </G>
    </Svg>
  );
};