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

export const TiSocialTumblerCircular = (props: IconProps) => {
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
        <Path d="M14.377 15.59v-1.234q-.599.401-1.166.4-.266-.001-.6-.166-.2-.134-.234-.301-.1-.2-.1-.867v-1.966h1.834v-1.233h-1.834V8.256h-1.066q-.134.7-.267 1-.165.367-.533.666-.367.301-.767.434v1.101h.833v2.7q0 .465.134.799.099.267.4.533.232.234.666.4.532.134.934.133.467 0 .866-.1.468-.1.9-.332" />
        <Path d="M12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9m0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7" />
      </G>
    </Svg>
  );
};