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

export const TbPhotoCircleMinus = (props: IconProps) => {
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
        <Path d="M15 8h.01M20.475 15.035A9 9 0 0 0 12 3a9 9 0 0 0-9 9 9 9 0 0 0 9.525 8.985" />
        <Path d="m4 15 4-4c.928-.893 2.072-.893 3 0l4 4" />
        <Path d="m14 14 1-1c.928-.893 2.072-.893 3 0l2 2M16 19h6" />
      </G>
    </Svg>
  );
};