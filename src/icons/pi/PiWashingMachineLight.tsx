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

export const PiWashingMachineLight = (props: IconProps) => {
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
        <Path d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM128 66a62 62 0 1 0 62 62 62.07 62.07 0 0 0-62-62m0 112a50 50 0 1 1 50-50 50.06 50.06 0 0 1-50 50m70-110a10 10 0 1 1-10-10 10 10 0 0 1 10 10m-73.76 48.24-16 16a6 6 0 0 1-8.48-8.48l16-16a6 6 0 0 1 8.48 8.48m32-.48a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0" />
      </G>
    </Svg>
  );
};