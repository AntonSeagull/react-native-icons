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

export const RiGridFill = (props: IconProps) => {
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
        <Path d="M14 10v4h-4v-4zm2 0h5v4h-5zm-2 11h-4v-5h4zm2 0v-5h5v4a1 1 0 0 1-1 1zM14 3v5h-4V3zm2 0h4a1 1 0 0 1 1 1v4h-5zm-8 7v4H3v-4zm0 11H4a1 1 0 0 1-1-1v-4h5zM8 3v5H3V4a1 1 0 0 1 1-1z" />
      </G>
    </Svg>
  );
};