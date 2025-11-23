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

export const PiAirplayLight = (props: IconProps) => {
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
        <Path d="M132.56 156.1a6 6 0 0 0-9.11 0l-48 56A6 6 0 0 0 80 222h96a6 6 0 0 0 4.56-9.9ZM93.05 210l35-40.78L163 210ZM230 64v112a22 22 0 0 1-22 22h-8a6 6 0 0 1 0-12h8a10 10 0 0 0 10-10V64a10 10 0 0 0-10-10H48a10 10 0 0 0-10 10v112a10 10 0 0 0 10 10h8a6 6 0 0 1 0 12h-8a22 22 0 0 1-22-22V64a22 22 0 0 1 22-22h160a22 22 0 0 1 22 22" />
      </G>
    </Svg>
  );
};