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

export const TbBlob = (props: IconProps) => {
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
        <Path d="M5.897 20.188C7.567 20.94 9.793 21 12 21s4.434-.059 6.104-.812c.868-.392 1.614-.982 2.133-1.856.514-.865.763-1.94.763-3.234 0-2.577-.983-5.315-2.557-7.416C16.873 5.588 14.61 4 12 4S7.127 5.588 5.557 7.682C3.983 9.783 3 12.522 3 15.098c0 1.295.249 2.369.763 3.234.519.874 1.265 1.464 2.134 1.856" />
      </G>
    </Svg>
  );
};