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

export const TbNurseFilled = (props: IconProps) => {
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
        <Path d="M12.002 4c2.866 0 6.7 1.365 9.532 3.155a1 1 0 0 1 .45 1.024l-2 11A1 1 0 0 1 19 20H5a1 1 0 0 1-.984-.821l-2-11a1 1 0 0 1 .45-1.024C5.3 5.363 9.19 3.995 12.002 4M12 9a1 1 0 0 0-1 1v1h-1a1 1 0 0 0-.993.883L9 12a1 1 0 0 0 1 1h1v1a1 1 0 0 0 .883.993L12 15a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 .993-.883L15 12a1 1 0 0 0-1-1h-1v-1a1 1 0 0 0-.883-.993z" />
      </G>
    </Svg>
  );
};