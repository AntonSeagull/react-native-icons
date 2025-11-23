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

export const BiSolidCabinet = (props: IconProps) => {
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
        <Path d="M21 4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v7h18zm-5 4H8V5h2v1h4V5h2zM5 22h14c1.103 0 2-.897 2-2v-7H3v7c0 1.103.897 2 2 2m3-6h2v1h4v-1h2v3H8z" />
      </G>
    </Svg>
  );
};