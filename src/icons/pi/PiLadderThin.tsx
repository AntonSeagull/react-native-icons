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

export const PiLadderThin = (props: IconProps) => {
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
        <Path d="M211.76 214.63 160.26 73l10.54-29H184a4 4 0 0 0 0-8H88a4 4 0 0 0 0 8h10.29l-62 170.63a4 4 0 0 0 2.39 5.13A4.2 4.2 0 0 0 40 220a4 4 0 0 0 3.76-2.63L54.44 188h55.49l-9.69 26.63a4 4 0 0 0 2.39 5.13 4.1 4.1 0 0 0 1.37.24 4 4 0 0 0 3.76-2.63L127.17 164h57.66l19.41 53.37A4 4 0 0 0 208 220a4.2 4.2 0 0 0 1.37-.24 4 4 0 0 0 2.39-5.13M130.29 132H74.8l14.55-40h55.48Zm32-88-14.55 40H92.26l14.54-40ZM57.35 180l14.54-40h55.49l-14.55 40Zm72.72-24L156 84.7l25.92 71.3Z" />
      </G>
    </Svg>
  );
};