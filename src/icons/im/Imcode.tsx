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

export const Imcode = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M0 2h2v10H0zm3 0h1v10H3zm2 0h1v10H5zm3 0h1v10H8zm4 0h1v10h-1zm3 0h1v10h-1zm-5 0h.5v10H10zM7 2h.5v10H7zm6.5 0h.5v10h-.5zM0 13h1v1H0zm3 0h1v1H3zm2 0h1v1H5zm5 0h1v1h-1zm5 0h1v1h-1zm-3 0h2v1h-2zm-5 0h2v1H7z" />
      </G>
    </Svg>
  );
};