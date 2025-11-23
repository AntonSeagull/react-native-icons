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

export const PiCurrencyCnyFill = (props: IconProps) => {
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
        <Path d="M128 16a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 16M88 72h80a8 8 0 0 1 0 16H88a8 8 0 0 1 0-16m104 88a8 8 0 0 1-8 8h-24a24 24 0 0 1-24-24v-24h-16a48.05 48.05 0 0 1-48 48 8 8 0 0 1 0-16 32 32 0 0 0 32-32H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16h-24v24a8 8 0 0 0 8 8h16v-8a8 8 0 0 1 16 0Z" />
      </G>
    </Svg>
  );
};