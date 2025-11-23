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

export const PiInvoiceBold = (props: IconProps) => {
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
        <Path d="M28 132a12 12 0 0 1 0-24h28a4 4 0 0 0 0-8H40a28 28 0 0 1-3.38-55.79A12 12 0 0 1 59.3 44H64a12 12 0 0 1 0 24H40a4 4 0 0 0 0 8h16a28 28 0 0 1 3.38 55.79 12 12 0 0 1-22.68.21Zm208-76v136a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20v-28a12 12 0 0 1 24 0v24h112v-24H88a12 12 0 0 1 0-24h68v-24h-44a12 12 0 0 1 0-24h100V68H104a12 12 0 0 1 0-24h120a12 12 0 0 1 12 12m-56 84h32v-24h-32Zm32 48v-24h-32v24Z" />
      </G>
    </Svg>
  );
};