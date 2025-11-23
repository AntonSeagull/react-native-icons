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

export const GoKebabHorizontal = (props: IconProps) => {
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
        <Path d="M20 14a2 2 0 1 1-.001-3.999A2 2 0 0 1 20 14M6 12a2 2 0 1 1-3.999.001A2 2 0 0 1 6 12m8 0a2 2 0 1 1-3.999.001A2 2 0 0 1 14 12" />
      </G>
    </Svg>
  );
};