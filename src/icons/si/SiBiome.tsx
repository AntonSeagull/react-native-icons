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

export const SiBiome = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m12 1.608-5.346 9.259a12.07 12.07 0 0 1 6.326-.219l1.807.426-1.7 7.208-1.809-.427c-2.224-.524-4.361.644-5.264 2.507l-1.672-.809c1.276-2.636 4.284-4.232 7.364-3.505l.847-3.592A10.21 10.21 0 0 0 0 22.392h24z" />
      </G>
    </Svg>
  );
};