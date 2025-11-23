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

export const RiShape2Fill = (props: IconProps) => {
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
        <Path d="M2 2h5v5H2zm0 15h5v5H2zM17 2h5v5h-5zm0 15h5v5h-5zM8 4h8v2H8zM4 8h2v8H4zm14 0h2v8h-2zM8 18h8v2H8z" />
      </G>
    </Svg>
  );
};