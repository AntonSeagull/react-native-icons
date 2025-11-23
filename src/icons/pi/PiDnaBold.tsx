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

export const PiDnaBold = (props: IconProps) => {
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
        <Path d="M204 204.5V232a12 12 0 0 1-24 0v-27.5a59.68 59.68 0 0 0-33.17-53.67l-48.4-24.2A83.54 83.54 0 0 1 52 51.5V24a12 12 0 0 1 24 0v27.5a59.68 59.68 0 0 0 33.17 53.67l48.4 24.2A83.54 83.54 0 0 1 204 204.5m-52-.5H76a59.8 59.8 0 0 1 2.34-16h56.2a12 12 0 0 0 0-24H91.76c1-1.1 2-2.18 3.13-3.21a12 12 0 0 0-16.45-17.48A84.38 84.38 0 0 0 52 204.5V232a12 12 0 0 0 24 0v-4h76a12 12 0 0 0 0-24m40-192a12 12 0 0 0-12 12v4h-76a12 12 0 0 0 0 24h76a59.8 59.8 0 0 1-2.34 16h-56.22a12 12 0 0 0 0 24h42.8c-1 1.1-2 2.18-3.13 3.21a12 12 0 0 0 16.45 17.48A84.38 84.38 0 0 0 204 51.5V24a12 12 0 0 0-12-12" />
      </G>
    </Svg>
  );
};