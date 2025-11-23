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

export const TbBrandD3 = (props: IconProps) => {
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
        <Path d="M3 4h1.8C8.776 4 12 7.582 12 12s-3.224 8-7.2 8H3M12 4h5.472C19.42 4 21 5.79 21 8s-1.58 4-3.528 4M17.472 12H15M17.472 12H15.12M17.472 12C19.42 12 21 13.79 21 16s-1.58 4-3.528 4H12" />
      </G>
    </Svg>
  );
};