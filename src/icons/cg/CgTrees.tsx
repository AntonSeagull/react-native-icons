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

export const CgTrees = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M12.74 16.319A5 5 0 0 1 10 17.9V21a1 1 0 1 1-2 0v-3.1A5 5 0 0 1 4 13V7a5 5 0 0 1 9.98-.453A4 4 0 0 1 20 10v4a4 4 0 0 1-3 3.874V21a1 1 0 1 1-2 0v-3.126a4 4 0 0 1-2.26-1.555M12 7v6a3 3 0 0 1-2 2.83V13a1 1 0 1 0-2 0v2.83A3 3 0 0 1 6 13V7a3 3 0 0 1 6 0m5 8.732V13a1 1 0 1 0-2 0v2.732A2 2 0 0 1 14 14v-4a2 2 0 1 1 4 0v4a2 2 0 0 1-1 1.732" clipRule="evenodd" />
      </G>
    </Svg>
  );
};