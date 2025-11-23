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

export const TbBrandRevolut = (props: IconProps) => {
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
        <Path d="M5 10h3v10H5z" />
        <Path d="M14.5 4H5v3h9.4a1.5 1.5 0 0 1 0 3H11v4l4 6h4l-5-7h.5a4.5 4.5 0 1 0 0-9" />
      </G>
    </Svg>
  );
};