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

export const TbNumbers = (props: IconProps) => {
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
        <Path d="M8 10V3L6 5M6 16a2 2 0 1 1 4 0c0 .591-.601 1.46-1 2l-3 3h4M15 14a2 2 0 1 0 2-2 2 2 0 1 0-2-2M6.5 10h3" />
      </G>
    </Svg>
  );
};