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

export const PiCastleTurretDuotone = (props: IconProps) => {
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
        <Path d="M208 48v44.69a8 8 0 0 1-2.34 5.65L192 112v112h-40v-56a24 24 0 0 0-48 0v56H64V112L50.34 98.34A8 8 0 0 1 48 92.69V48a8 8 0 0 1 8-8h24v32h32V40h32v32h32V40h24a8 8 0 0 1 8 8" opacity={0.2} />
        <Path d="M216 216h-16V115.31L211.31 104A15.86 15.86 0 0 0 216 92.69V48a16 16 0 0 0-16-16h-24a8 8 0 0 0-8 8v24h-16V40a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v24H88V40a8 8 0 0 0-8-8H56a16 16 0 0 0-16 16v44.69A15.86 15.86 0 0 0 44.69 104L56 115.31V216H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M69.66 106.34 56 92.69V48h16v24a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V48h16v24a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V48h16v44.69l-13.66 13.65A8 8 0 0 0 184 112v104h-24v-48a32 32 0 0 0-64 0v48H72V112a8 8 0 0 0-2.34-5.66M144 216h-32v-48a16 16 0 0 1 32 0Z" />
      </G>
    </Svg>
  );
};