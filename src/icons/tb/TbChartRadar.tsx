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

export const TbChartRadar = (props: IconProps) => {
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
        <Path d="m12 3 9.5 7L18 21H6L2.5 10z" />
        <Path d="m12 7.5 5.5 4L15 17H8.5l-2-5.5z" />
        <Path d="m2.5 10 9.5 3 9.5-3" />
        <Path d="M12 3v10l6 8M6 21l6-8" />
      </G>
    </Svg>
  );
};