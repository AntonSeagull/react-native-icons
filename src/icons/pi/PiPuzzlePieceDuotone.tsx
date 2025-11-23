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

export const PiPuzzlePieceDuotone = (props: IconProps) => {
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
        <Path d="M204 168a28 28 0 0 0 12-2.69V208a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8v-42.69a28 28 0 1 1 0-50.62V72a8 8 0 0 1 8-8h46.69a28 28 0 1 1 50.61 0H208a8 8 0 0 1 8 8v42.69A28 28 0 1 0 204 168" opacity={0.2} />
        <Path d="M220.27 158.54a8 8 0 0 0-7.7-.46 20 20 0 1 1 0-36.16 8 8 0 0 0 11.43-7.23V72a16 16 0 0 0-16-16h-36.22a35 35 0 0 0 .22-4 36.15 36.15 0 0 0-11.36-26.25 36 36 0 0 0-60.55 23.63 36.6 36.6 0 0 0 .14 6.62H64a16 16 0 0 0-16 16v32.22a35 35 0 0 0-4-.22 36.12 36.12 0 0 0-26.24 11.36 35.7 35.7 0 0 0-9.69 27 36.08 36.08 0 0 0 33.31 33.6 36.6 36.6 0 0 0 6.62-.14V208a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-42.69a8 8 0 0 0-3.73-6.77M208 208H64v-42.69a8 8 0 0 0-11.43-7.23 20 20 0 1 1 0-36.16A8 8 0 0 0 64 114.69V72h46.69a8 8 0 0 0 7.23-11.43 20 20 0 1 1 36.16 0A8 8 0 0 0 161.31 72H208v32.23a35.7 35.7 0 0 0-6.62-.14A36 36 0 0 0 204 176a35 35 0 0 0 4-.22Z" />
      </G>
    </Svg>
  );
};