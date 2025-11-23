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

export const PiSolarRoofFill = (props: IconProps) => {
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
        <Path d="m247.16 124.42-40-80A8 8 0 0 0 200 40H56a8 8 0 0 0-7.16 4.42l-40 80A8.1 8.1 0 0 0 8 128v56a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16v-56a8.1 8.1 0 0 0-.84-3.58M99.06 56l12 24H80.94l-12-24Zm48 0 12 24h-30.12l-12-24Zm-46.12 64-12-24h30.12l12 24Zm48 0-12-24h30.12l12 24Zm48 0-12-24h30.12l12 24Zm10.12-40h-30.12l-12-24h30.12ZM104 184v-48h128v48Z" />
      </G>
    </Svg>
  );
};