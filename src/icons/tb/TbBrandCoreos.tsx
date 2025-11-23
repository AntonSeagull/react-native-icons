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

export const TbBrandCoreos = (props: IconProps) => {
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
        <Path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
        <Path d="M12 3c-3.263 3.212-3 7.654-3 12 4.59.244 8.814-.282 12-3" />
        <Path d="M9.5 9a4.494 4.494 0 0 1 5.5 5.5" />
      </G>
    </Svg>
  );
};