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

export const RiEqualizer2Fill = (props: IconProps) => {
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
        <Path d="M3 7a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m17 1h-8V6h8zm-6 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m-2-1v2H4v-2z" />
      </G>
    </Svg>
  );
};