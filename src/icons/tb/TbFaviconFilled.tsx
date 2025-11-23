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

export const TbFaviconFilled = (props: IconProps) => {
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
        <Path d="M19 4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zM6 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m5 0a3 3 0 0 0 0 6 1 1 0 0 0 .117-1.993L11 13a1 1 0 0 1-.117-1.993L11 11a1 1 0 0 0 0-2m5 0a3 3 0 0 0-2.995 2.824L13 12a3 3 0 1 0 3-3" />
        <Path d="M16 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
      </G>
    </Svg>
  );
};