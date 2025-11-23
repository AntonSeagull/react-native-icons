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

export const PiTextAUnderlineBold = (props: IconProps) => {
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
        <Path d="M58.89 178.86a12 12 0 0 0 16-5.75L90.44 140h75.12l15.58 33.11a12 12 0 0 0 21.72-10.22l-64-136a12 12 0 0 0-21.72 0l-64 136a12 12 0 0 0 5.75 15.97M128 60.18 154.27 116h-52.54ZM228 216a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};