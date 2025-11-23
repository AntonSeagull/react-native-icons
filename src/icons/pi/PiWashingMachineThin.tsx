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

export const PiWashingMachineThin = (props: IconProps) => {
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
        <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM128 68a60 60 0 1 0 60 60 60.07 60.07 0 0 0-60-60m0 112a52 52 0 1 1 52-52 52.06 52.06 0 0 1-52 52m68-112a8 8 0 1 1-8-8 8 8 0 0 1 8 8m-73.17 46.83-16 16a4 4 0 0 1-5.66-5.66l16-16a4 4 0 0 1 5.66 5.66m32 2.34a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0" />
      </G>
    </Svg>
  );
};