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

export const RiLayoutGrid2Fill = (props: IconProps) => {
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
        <Path d="M3 3a1 1 0 0 0-1 1v4h5.5V3zm6.5 0v5h5V3zm7 0v5H22V4a1 1 0 0 0-1-1zm5.5 7h-5.5v4H22zm0 6h-5.5v5H21a1 1 0 0 0 1-1zm-7.5 5v-5h-5v5zm-7 0v-5H2v4a1 1 0 0 0 1 1zM2 14h5.5v-4H2zm7.5-4h5v4h-5z" />
      </G>
    </Svg>
  );
};