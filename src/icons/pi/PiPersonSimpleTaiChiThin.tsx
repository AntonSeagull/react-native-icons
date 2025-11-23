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

export const PiPersonSimpleTaiChiThin = (props: IconProps) => {
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
        <Path d="M128 76a28 28 0 1 0-28-28 28 28 0 0 0 28 28m0-48a20 20 0 1 1-20 20 20 20 0 0 1 20-20m92 76a4 4 0 0 1-4 4h-84v33.36l53.58 23A4 4 0 0 1 188 168v48a4 4 0 0 1-8 0v-45.36l-51.22-22L50.68 219a4 4 0 1 1-5.36-6L124 142.22V108H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};