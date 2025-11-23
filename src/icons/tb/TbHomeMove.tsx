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

export const TbHomeMove = (props: IconProps) => {
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
        <Path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
        <Path d="M19 12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5.5M16 19h6M19 16l3 3-3 3" />
      </G>
    </Svg>
  );
};