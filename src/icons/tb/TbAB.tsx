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

export const TbAB = (props: IconProps) => {
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
        <Path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0V16m0-4H3M12 6v12M16 16V8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3" />
      </G>
    </Svg>
  );
};