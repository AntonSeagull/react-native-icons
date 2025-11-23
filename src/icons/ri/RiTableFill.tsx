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

export const RiTableFill = (props: IconProps) => {
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
        <Path d="M15 21H9V10h6zm2 0V10h5v10a1 1 0 0 1-1 1zM7 21H3a1 1 0 0 1-1-1V10h5zM22 8H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1z" />
      </G>
    </Svg>
  );
};