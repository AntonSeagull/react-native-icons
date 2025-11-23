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

export const CgCodeSlash = (props: IconProps) => {
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
        <Path fill="currentColor" d="M13.325 3.05 8.667 20.432l1.932.518 4.658-17.382zM7.612 18.36l1.36-1.448-.001-.019-5.094-4.78 4.79-5.105-1.458-1.369-6.16 6.563zM16.388 18.36l-1.36-1.448.001-.019 5.094-4.78-4.79-5.105 1.458-1.369 6.16 6.563z" />
      </G>
    </Svg>
  );
};