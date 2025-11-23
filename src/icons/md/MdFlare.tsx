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

export const MdFlare = (props: IconProps) => {
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
        <Path d="M7 11H1v2h6zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12zM13 1h-2v6h2zm5.36 6.05-1.41-1.41-2.12 2.12 1.41 1.41zM17 11v2h6v-2zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m2.83 7.24 2.12 2.12 1.41-1.41-2.12-2.12zm-9.19.71 1.41 1.41 2.12-2.12-1.41-1.41zM11 23h2v-6h-2z" />
      </G>
    </Svg>
  );
};