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

export const TbArrowGuide = (props: IconProps) => {
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
        <Path d="M3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 19h3a2 2 0 0 0 2-2V9a2 2 0 0 1 2-2h7" />
        <Path d="m18 4 3 3-3 3" />
      </G>
    </Svg>
  );
};