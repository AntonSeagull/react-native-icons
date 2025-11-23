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

export const PiOctagon = (props: IconProps) => {
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
        <Path d="m227.31 80.24-51.55-51.55A15.86 15.86 0 0 0 164.45 24h-72.9a15.86 15.86 0 0 0-11.31 4.69L28.69 80.24A15.86 15.86 0 0 0 24 91.55v72.9a15.86 15.86 0 0 0 4.69 11.31l51.55 51.55A15.86 15.86 0 0 0 91.55 232h72.9a15.86 15.86 0 0 0 11.31-4.69l51.55-51.55a15.86 15.86 0 0 0 4.69-11.31v-72.9a15.86 15.86 0 0 0-4.69-11.31M216 164.45 164.45 216h-72.9L40 164.45v-72.9L91.55 40h72.9L216 91.55Z" />
      </G>
    </Svg>
  );
};