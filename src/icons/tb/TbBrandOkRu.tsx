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

export const TbBrandOkRu = (props: IconProps) => {
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
        <Path d="M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M20 12c0 8 0 8-8 8s-8 0-8-8 0-8 8-8 8 0 8 8" />
        <Path d="M9.5 13c1.333.667 3.667.667 5 0M9.5 17l2.5-3 2.5 3M12 13.5v.5" />
      </G>
    </Svg>
  );
};