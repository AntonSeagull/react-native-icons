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

export const TiFlowChildren = (props: IconProps) => {
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
        <Path d="M17 16a2.99 2.99 0 0 0-2.816 2H11c-1.654 0-3-1.346-3-3v-3.025A4.95 4.95 0 0 0 11 13h3.184A2.99 2.99 0 0 0 17 15a3 3 0 1 0 0-6 2.99 2.99 0 0 0-2.816 2H11c-1.654 0-3-1.346-3-3v-.184A2.99 2.99 0 0 0 10 5a3 3 0 1 0-6 0 2.99 2.99 0 0 0 2 2.816V15c0 2.757 2.243 5 5 5h3.184A2.99 2.99 0 0 0 17 22a3 3 0 1 0 0-6m0-5a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1M7 4a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1m10 16a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2" />
      </G>
    </Svg>
  );
};