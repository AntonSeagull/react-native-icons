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

export const TbWallpaper = (props: IconProps) => {
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
        <Path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6" />
        <Path d="M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M8 18V6a2 2 0 1 0-4 0v12" />
      </G>
    </Svg>
  );
};