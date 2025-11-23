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

export const PiChargingStationDuotone = (props: IconProps) => {
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
        <Path d="M168 56v160H56V56a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16" opacity={0.2} />
        <Path d="M134.62 123.51a8 8 0 0 1 .81 7.46l-16 40a8 8 0 0 1-14.86-5.97l11.61-29H96a8 8 0 0 1-7.43-11l16-40a8 8 0 1 1 14.86 6l-11.61 29H128a8 8 0 0 1 6.62 3.51M248 86.63V168a24 24 0 0 1-48 0v-40a8 8 0 0 0-8-8h-16v88h16a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h16V56a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v48h16a24 24 0 0 1 24 24v40a8 8 0 0 0 16 0V86.63a8 8 0 0 0-2.34-5.63l-19.32-19.34a8 8 0 0 1 11.32-11.32L241 69.66a23.85 23.85 0 0 1 7 16.97M160 208V56a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v152Z" />
      </G>
    </Svg>
  );
};