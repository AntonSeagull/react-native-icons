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

export const RiWaterFlashLine = (props: IconProps) => {
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
        <Path d="m12.005 3.103-4.95 4.95a7 7 0 1 0 9.9 0zm0-2.828 6.364 6.364A9 9 0 1 1 5.64 19.367a9 9 0 0 1 0-12.728zm1 10.728h2.5l-4.5 6.5v-4.5h-2.5l4.5-6.5z" />
      </G>
    </Svg>
  );
};