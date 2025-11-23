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

export const BiFilm = (props: IconProps) => {
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
        <Path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M9 11V5h6v6zm6 2v6H9v-6zM5 5h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm14.002 2H17v-2h2.002zm-.001-4H17v-2h2.001zm0-4H17V9h2.001zM17 7V5h2v2z" />
      </G>
    </Svg>
  );
};