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

export const PiIdentificationCardFill = (props: IconProps) => {
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
        <Path d="M112 120a16 16 0 1 1-16-16 16 16 0 0 1 16 16m120-64v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-96.25 110a39.76 39.76 0 0 0-17.19-23.34 32 32 0 1 0-45.12 0A39.84 39.84 0 0 0 56.25 166a8 8 0 0 0 15.5 4c2.64-10.25 13.06-18 24.25-18s21.62 7.73 24.25 18a8 8 0 1 0 15.5-4M200 144a8 8 0 0 0-8-8h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8m0-32a8 8 0 0 0-8-8h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8" />
      </G>
    </Svg>
  );
};