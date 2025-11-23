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

export const PiHandbagLight = (props: IconProps) => {
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
        <Path d="m237.9 198.36-14.25-120a14.06 14.06 0 0 0-14-12.36H174v-2a46 46 0 0 0-92 0v2H46.33a14.06 14.06 0 0 0-14 12.36l-14.25 120a14 14 0 0 0 14 15.64h191.84a14 14 0 0 0 14-15.64ZM94 64a34 34 0 0 1 68 0v2H94Zm131.5 137.3a2.07 2.07 0 0 1-1.58.7H32.08a2.07 2.07 0 0 1-1.58-.7 1.92 1.92 0 0 1-.49-1.53l14.26-120A2 2 0 0 1 46.33 78H82v26a6 6 0 0 0 12 0V78h68v26a6 6 0 0 0 12 0V78h35.67a2 2 0 0 1 2.06 1.77l14.26 120a1.92 1.92 0 0 1-.49 1.53" />
      </G>
    </Svg>
  );
};