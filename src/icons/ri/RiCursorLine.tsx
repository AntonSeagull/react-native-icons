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

export const RiCursorLine = (props: IconProps) => {
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
        <Path d="m15.387 13.498 2.553 7.014-4.698 1.71-2.553-7.014-3.899 2.445 1.619-16.02 11.537 11.232zm-.01 5.818-2.715-7.46 2.96-.41-5.64-5.49-.791 7.83 2.531-1.587 2.715 7.46z" />
      </G>
    </Svg>
  );
};