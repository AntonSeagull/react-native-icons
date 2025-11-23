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

export const PiCirclesThreeDuotone = (props: IconProps) => {
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
        <Path d="M128 112a36 36 0 1 1 36-36 36 36 0 0 1-36 36m60 24a36 36 0 1 0 36 36 36 36 0 0 0-36-36m-120 0a36 36 0 1 0 36 36 36 36 0 0 0-36-36" opacity={0.2} />
        <Path d="M172 76a44 44 0 1 0-44 44 44.05 44.05 0 0 0 44-44m-44 28a28 28 0 1 1 28-28 28 28 0 0 1-28 28m60 24a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28 28 28 0 0 1-28 28M68 128a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28 28 28 0 0 1-28 28" />
      </G>
    </Svg>
  );
};