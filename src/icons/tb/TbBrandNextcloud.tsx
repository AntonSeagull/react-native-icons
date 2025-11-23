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

export const TbBrandNextcloud = (props: IconProps) => {
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
        <Path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0M2 12.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M17 12.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0" />
      </G>
    </Svg>
  );
};