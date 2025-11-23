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

export const RiFileShieldFill = (props: IconProps) => {
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
        <Path d="M21 7v13.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.447 2 3.998 2h11.999zM8 8v5.6c0 .85.446 1.643 1.187 2.114L12 17.5l2.813-1.786A2.51 2.51 0 0 0 16 13.6V8zm2 2h4v3.6c0 .158-.09.318-.26.425L12 15.131l-1.74-1.106c-.17-.107-.26-.267-.26-.425z" />
      </G>
    </Svg>
  );
};