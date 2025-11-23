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

export const TbBreadFilled = (props: IconProps) => {
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
        <Path d="M18 3a4 4 0 0 1 3.109 6.516l-.11.126L21 18a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-3-3V9.644l-.116-.136a4 4 0 0 1-.728-3.616l.067-.21c.532-1.525 1.93-2.58 3.601-2.677l12.079.001z" />
      </G>
    </Svg>
  );
};