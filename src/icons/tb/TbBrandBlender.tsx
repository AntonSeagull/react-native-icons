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

export const TbBrandBlender = (props: IconProps) => {
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
        <Path d="M9 14a6 5 0 1 0 12 0 6 5 0 1 0-12 0" />
        <Path d="M14 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 16l9-6.5M6 9h9M13 5l5.65 5" />
      </G>
    </Svg>
  );
};