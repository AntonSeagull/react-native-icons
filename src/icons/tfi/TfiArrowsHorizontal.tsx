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

export const TfiArrowsHorizontal = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m16.716 8.5-3.954 3.858-.698-.716L14.771 9H2.229l2.708 2.642-.698.716L.284 8.5l3.954-3.858.698.716L2.229 8h12.543l-2.708-2.642.698-.716z" />
      </G>
    </Svg>
  );
};