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

export const TbBrandStackshare = (props: IconProps) => {
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
        <Path d="M17 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 12h3l3.5 6H17M17 6h-3.5L10 12" />
      </G>
    </Svg>
  );
};