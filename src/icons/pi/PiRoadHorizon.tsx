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

export const PiRoadHorizon = (props: IconProps) => {
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
        <Path d="M235.92 199a8 8 0 0 1-10.92-3.08L155.32 72H136v8a8 8 0 0 1-16 0v-8h-19.32L31 195.92a8 8 0 0 1-14-7.84L82.32 72H24a8 8 0 0 1 0-16h208a8 8 0 0 1 0 16h-58.32L239 188.08a8 8 0 0 1-3.08 10.92M128 112a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8m0 56a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8" />
      </G>
    </Svg>
  );
};