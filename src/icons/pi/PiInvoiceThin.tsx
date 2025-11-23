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

export const PiInvoiceThin = (props: IconProps) => {
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
        <Path d="M28 124a4 4 0 0 1 0-8h28a12 12 0 0 0 0-24H40a20 20 0 0 1 0-40h4v-4a4 4 0 0 1 8 0v4h12a4 4 0 0 1 0 8H40a12 12 0 0 0 0 24h16a20 20 0 0 1 0 40h-4v4a4 4 0 0 1-8 0v-4Zm200-68v136a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12v-40a4 4 0 0 1 8 0v40a4 4 0 0 0 4 4h124v-40H80a4 4 0 0 1 0-8h84v-40h-60a4 4 0 0 1 0-8h116V60H96a4 4 0 0 1 0-8h128a4 4 0 0 1 4 4m-56 92h48v-40h-48Zm48 44v-36h-48v40h44a4 4 0 0 0 4-4" />
      </G>
    </Svg>
  );
};