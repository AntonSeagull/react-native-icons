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

export const TbArrowsShuffle2 = (props: IconProps) => {
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
        <Path d="m18 4 3 3-3 3M18 20l3-3-3-3" />
        <Path d="M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h5" />
        <Path d="M3 17h3a5 5 0 0 0 5-5 5 5 0 0 1 5-5h5" />
      </G>
    </Svg>
  );
};