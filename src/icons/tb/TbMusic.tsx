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

export const TbMusic = (props: IconProps) => {
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
        <Path d="M3 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M13 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
        <Path d="M9 17V4h10v13M9 8h10" />
      </G>
    </Svg>
  );
};