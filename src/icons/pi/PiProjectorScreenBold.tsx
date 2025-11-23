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

export const PiProjectorScreenBold = (props: IconProps) => {
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
        <Path d="M236 72V48a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v24a20 20 0 0 0 16 19.6V164h-4a12 12 0 0 0 0 24h84v23.22a24 24 0 1 0 24 0V188h84a12 12 0 0 0 0-24h-4V91.6A20 20 0 0 0 236 72M44 52h168v16H44Zm16 112V92h136v72Z" />
      </G>
    </Svg>
  );
};