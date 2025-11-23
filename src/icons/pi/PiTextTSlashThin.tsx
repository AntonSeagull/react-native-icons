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

export const PiTextTSlashThin = (props: IconProps) => {
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
        <Path d="M210.69 219a4 4 0 0 1-5.65-.27l-73-80.34V196h28a4 4 0 0 1 0 8H96a4 4 0 0 1 0-8h28v-66.45L60.78 60H60v28a4 4 0 0 1-8 0V56a4 4 0 0 1 2-3.45l-9-9.86a4 4 0 0 1 6-5.38l160 176a4 4 0 0 1-.31 5.69M105.79 60H124v20.43a4 4 0 0 0 8 0V60h64v28a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4h-94.21a4 4 0 0 0 0 8" />
      </G>
    </Svg>
  );
};