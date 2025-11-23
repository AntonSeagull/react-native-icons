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

export const RiAnthropicFill = (props: IconProps) => {
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
        <Path d="M16.765 5h-3.308l5.923 15h3.23zM7.226 5 1.38 20h3.308l1.307-3.154h6.154l1.23 3.077h3.309L10.688 5H7.226m-.308 9.077 2-5.308 2.077 5.308H6.918" />
      </G>
    </Svg>
  );
};