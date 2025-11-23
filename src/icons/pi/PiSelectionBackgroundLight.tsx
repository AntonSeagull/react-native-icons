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

export const PiSelectionBackgroundLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M160 82H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2ZM138 40a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m84 8v8a6 6 0 0 1-12 0v-8a2 2 0 0 0-2-2h-8a6 6 0 0 1 0-12h8a14 14 0 0 1 14 14m0 48v16a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m0 56v8a14 14 0 0 1-14 14h-8a6 6 0 0 1 0-12h8a2 2 0 0 0 2-2v-8a6 6 0 0 1 12 0M82 56v-8a14 14 0 0 1 14-14h8a6 6 0 0 1 0 12h-8a2 2 0 0 0-2 2v8a6 6 0 0 1-12 0" />
      </G>
    </Svg>
  );
};