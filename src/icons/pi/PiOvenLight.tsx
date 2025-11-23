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

export const PiOvenLight = (props: IconProps) => {
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
        <Path d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM74 76a10 10 0 1 1 10 10 10 10 0 0 1-10-10m44 0a10 10 0 1 1 10 10 10 10 0 0 1-10-10m44 0a10 10 0 1 1 10 10 10 10 0 0 1-10-10m22 30H72a6 6 0 0 0-6 6v72a6 6 0 0 0 6 6h112a6 6 0 0 0 6-6v-72a6 6 0 0 0-6-6m-6 72H78v-60h100Z" />
      </G>
    </Svg>
  );
};