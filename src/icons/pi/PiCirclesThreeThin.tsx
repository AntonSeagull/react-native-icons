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

export const PiCirclesThreeThin = (props: IconProps) => {
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
        <Path d="M168 76a40 40 0 1 0-40 40 40 40 0 0 0 40-40m-40 32a32 32 0 1 1 32-32 32 32 0 0 1-32 32m60 24a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 72a32 32 0 1 1 32-32 32 32 0 0 1-32 32M68 132a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 72a32 32 0 1 1 32-32 32 32 0 0 1-32 32" />
      </G>
    </Svg>
  );
};