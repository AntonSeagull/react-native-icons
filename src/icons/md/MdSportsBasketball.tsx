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

export const MdSportsBasketball = (props: IconProps) => {
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
        <Path d="M17.09 11h4.86a9.95 9.95 0 0 0-1.54-4.4 5.99 5.99 0 0 0-3.32 4.4M6.91 11a5.99 5.99 0 0 0-3.32-4.4A9.95 9.95 0 0 0 2.05 11zM15.07 11a8 8 0 0 1 4.06-6A9.97 9.97 0 0 0 13 2.05V11zM8.93 11H11V2.05A9.94 9.94 0 0 0 4.87 5a8 8 0 0 1 4.06 6M15.07 13H13v8.95A9.94 9.94 0 0 0 19.13 19a8 8 0 0 1-4.06-6M3.59 17.4A6.03 6.03 0 0 0 6.91 13H2.05c.16 1.61.71 3.11 1.54 4.4M17.09 13a5.99 5.99 0 0 0 3.32 4.4 9.95 9.95 0 0 0 1.54-4.4zM8.93 13a8 8 0 0 1-4.06 6A9.97 9.97 0 0 0 11 21.95V13z" />
      </G>
    </Svg>
  );
};