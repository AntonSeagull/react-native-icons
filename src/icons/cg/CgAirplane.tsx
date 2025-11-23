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

export const CgAirplane = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" d="M9.01 5.128h2c1.104 0 2.458.769 3.024 1.718L16.509 11h4.5a1 1 0 1 1 0 2h-4.595l-2.476 4.154c-.565.95-1.919 1.718-3.024 1.718h-2l3.5-5.872h-6.99L3.99 15.453h-2L4.01 12v-.033l-2-3.42h2L5.444 11h7.065z" />
      </G>
    </Svg>
  );
};