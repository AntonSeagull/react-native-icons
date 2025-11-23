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

export const SiUnocss = (props: IconProps) => {
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
        <Path d="M12.86 18.4a5.57 5.57 0 1 1 11.14 0 5.57 5.57 0 0 1-11.14 0m0-12.8A5.57 5.57 0 1 1 24 5.602v5.013a.557.557 0 0 1-.557.557H13.417a.557.557 0 0 1-.557-.557zm-1.72 12.8A5.57 5.57 0 1 1 0 18.4v-5.014a.557.557 0 0 1 .557-.557h10.026a.557.557 0 0 1 .557.557z" />
      </G>
    </Svg>
  );
};