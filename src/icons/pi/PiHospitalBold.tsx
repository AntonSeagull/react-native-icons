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

export const PiHospitalBold = (props: IconProps) => {
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
        <Path d="M244 204h-4v-76a20 20 0 0 0-20-20h-48V48a20 20 0 0 0-20-20H56a20 20 0 0 0-20 20v156h-4a12 12 0 0 0 0 24h212a12 12 0 0 0 0-24m-28-72v72h-44v-72ZM60 52h88v152h-12v-44a12 12 0 0 0-12-12H84a12 12 0 0 0-12 12v44H60Zm52 152H96v-32h16ZM72 96a12 12 0 0 1 12-12h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 0 24h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1-12-12" />
      </G>
    </Svg>
  );
};