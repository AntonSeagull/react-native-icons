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

export const HiMiniEllipsisVertical = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m1.5 7a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
      </G>
    </Svg>
  );
};