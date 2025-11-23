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

export const CgSelect = (props: IconProps) => {
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
        <Path fill="currentColor" d="m6 9.657 1.414 1.414 4.243-4.243 4.243 4.243 1.414-1.414L11.657 4zM6 14.443l1.414-1.414 4.243 4.243 4.243-4.243 1.414 1.414-5.657 5.657z" />
      </G>
    </Svg>
  );
};