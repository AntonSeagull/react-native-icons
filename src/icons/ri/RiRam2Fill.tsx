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

export const RiRam2Fill = (props: IconProps) => {
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
        <Path d="M2 5h20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1v2a1 1 0 0 1-1 1h-7.414l-1-1h-1.172l-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m2 11v1h5.586l1-1zm9.414 0 1 1H20v-1zM7 9H5v3h2zm2 0v3h2V9zm6 0h-2v3h2zm2 0v3h2V9z" />
      </G>
    </Svg>
  );
};