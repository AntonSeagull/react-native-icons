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

export const TbFilters = (props: IconProps) => {
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
        <Path d="M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8" />
        <Path d="M8 11a5 5 0 1 0 3.998 1.997" />
        <Path d="M12.002 19.003A5 5 0 1 0 16 11" />
      </G>
    </Svg>
  );
};