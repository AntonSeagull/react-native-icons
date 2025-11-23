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

export const PiCourtBasketballBold = (props: IconProps) => {
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
        <Path d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 112h-4a28 28 0 0 1 0-56h4ZM36 100h4a28 28 0 0 1 0 56h-4Zm0 80h4a52 52 0 0 0 0-104h-4v-8h80v120H36Zm104 8V68h80v8h-4a52 52 0 0 0 0 104h4v8Z" />
      </G>
    </Svg>
  );
};