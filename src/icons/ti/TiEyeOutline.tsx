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

export const TiEyeOutline = (props: IconProps) => {
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
        <Path d="M12 9c1.211 0 2.381.355 3.297 1.004 1.301.92 2.43 2.124 3.165 2.996-.735.872-1.864 2.077-3.166 2.996C14.381 16.645 13.211 17 12 17s-2.382-.355-3.299-1.004C7.4 15.076 6.271 13.872 5.537 13c.734-.872 1.863-2.076 3.164-2.995C9.618 9.355 10.789 9 12 9m0-2c-1.691 0-3.242.516-4.453 1.371C4.928 10.223 3 13 3 13s1.928 2.777 4.547 4.629C8.758 18.484 10.309 19 12 19s3.242-.516 4.451-1.371C19.07 15.777 21 13 21 13s-1.93-2.777-4.549-4.629C15.242 7.516 13.691 7 12 7m0 5a1 1 0 1 0-.002 1.998A1 1 0 0 0 12 12m0 4c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m0-5a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 11" />
      </G>
    </Svg>
  );
};