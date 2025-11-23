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

export const BiCuboid = (props: IconProps) => {
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
        <Path d="M16.707 2.293A1 1 0 0 0 16 2H8c-.414 0-.785.255-.934.641l-5 13a1 1 0 0 0 .227 1.066l5 5A1 1 0 0 0 8 22h8c.414 0 .785-.255.934-.641l5-13a1 1 0 0 0-.227-1.066zM18.585 7h-5.171l-3-3h5.172zM8.381 4.795l3.438 3.438-4.462 10.71-3.19-3.191zM15.313 20h-6.23l4.583-11h5.878z" />
      </G>
    </Svg>
  );
};