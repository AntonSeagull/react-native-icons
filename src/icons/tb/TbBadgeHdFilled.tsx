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

export const TbBadgeHdFilled = (props: IconProps) => {
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
        <Path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-4 4h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3m-5 0a1 1 0 0 0-1 1v2H8V9a1 1 0 0 0-.883-.993L7 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-2h1v2a1 1 0 0 0 .883.993L10 16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m5 2a1 1 0 0 1 1 1v2a1 1 0 0 1-.883.993L15 14z" />
      </G>
    </Svg>
  );
};