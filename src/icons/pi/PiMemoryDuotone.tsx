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

export const PiMemoryDuotone = (props: IconProps) => {
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
        <Path d="M232 64H24a8 8 0 0 0-8 8v104h224V72a8 8 0 0 0-8-8m-120 80H48V96h64Zm96 0h-64V96h64Z" opacity={0.2} />
        <Path d="M232 56H24A16 16 0 0 0 8 72v128a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0V72a16 16 0 0 0-16-16M24 72h208v96H24Zm88 80a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8Zm-56-48h48v32H56Zm88 48h64a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8m8-48h48v32h-48Z" />
      </G>
    </Svg>
  );
};