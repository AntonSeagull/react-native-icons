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

export const TbGridPatternFilled = (props: IconProps) => {
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
        <Path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm-4 4a1 1 0 0 0-1 1v1h-2V8a1 1 0 0 0-.883-.993L10 7a1 1 0 0 0-1 1v1H8a1 1 0 0 0-.993.883L7 10a1 1 0 0 0 1 1h1v2H8a1 1 0 0 0-.993.883L7 14a1 1 0 0 0 1 1h1v1a1 1 0 0 0 .883.993L10 17a1 1 0 0 0 1-1v-1h2v1a1 1 0 0 0 .883.993L14 17a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 .993-.883L17 14a1 1 0 0 0-1-1h-1v-2h1a1 1 0 0 0 .993-.883L17 10a1 1 0 0 0-1-1h-1V8a1 1 0 0 0-.883-.993zm-1 4v2h-2v-2z" />
      </G>
    </Svg>
  );
};