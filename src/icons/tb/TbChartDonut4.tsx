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

export const TbChartDonut4 = (props: IconProps) => {
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
        <Path d="M8.848 14.667 5.5 17.5M12 3v5m4 4h5M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M14.219 15.328 17 19.5" />
        <Path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
      </G>
    </Svg>
  );
};