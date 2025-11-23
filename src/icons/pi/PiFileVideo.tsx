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

export const PiFileVideo = (props: IconProps) => {
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
        <Path d="m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31 188.69 80H160ZM155.88 145a8 8 0 0 0-8.12.22l-19.95 12.46A16 16 0 0 0 112 144H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h64a16 16 0 0 0 15.81-13.68l19.95 12.46A8 8 0 0 0 160 216v-64a8 8 0 0 0-4.12-7M112 208H48v-48h64zm32-6.43-16-10v-15.14l16-10Z" />
      </G>
    </Svg>
  );
};