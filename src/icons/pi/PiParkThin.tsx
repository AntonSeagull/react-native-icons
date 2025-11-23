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

export const PiParkThin = (props: IconProps) => {
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
        <Path d="M232 196h-36v-32h28a4 4 0 0 0 3.88-5l-32-128a4 4 0 0 0-7.76 0l-32 128a4 4 0 0 0 3.88 5h28v32h-72v-24h12a4 4 0 0 0 0-8h-12v-24h12a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8h12v24H40a4 4 0 0 0 0 8h12v24H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8M192 48.49 218.88 156h-53.76ZM60 140h48v24H60Zm0 32h48v24H60Zm56-80a24 24 0 1 0-24-24 24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16 16 16 0 0 1 16-16" />
      </G>
    </Svg>
  );
};