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

export const TbBrandAndroid = (props: IconProps) => {
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
        <Path d="M4 10v6M20 10v6M7 9h10v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1za5 5 0 0 1 10 0M8 3l1 2M16 3l-1 2M9 18v3M15 18v3" />
      </G>
    </Svg>
  );
};