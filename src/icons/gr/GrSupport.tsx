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

export const GrSupport = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M4.222 19.778c4.296 4.296 11.26 4.296 15.556 0s4.296-11.26 0-15.556-11.26-4.296-15.556 0-4.296 11.26 0 15.556ZM6.343 21.9l4.243-4.242m-8.485 0 4.242-4.243m11.314-2.828 4.242-4.243m-8.485 0 4.243-4.242m-9.9 14.142a6 6 0 1 0 8.486-8.486 6 6 0 0 0-8.486 8.486Zm-5.656-9.9 4.242 4.243m0-8.485 4.243 4.242m2.828 11.314 4.243 4.242m0-8.485 4.242 4.243" />
      </G>
    </Svg>
  );
};