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

export const PiCalculatorLight = (props: IconProps) => {
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
        <Path d="M176 58H80a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6h96a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6m-6 48H86V70h84Zm30-80H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m2 190a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2ZM98 148a10 10 0 1 1-10-10 10 10 0 0 1 10 10m40 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10m40 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10m-80 40a10 10 0 1 1-10-10 10 10 0 0 1 10 10m40 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10m40 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10" />
      </G>
    </Svg>
  );
};