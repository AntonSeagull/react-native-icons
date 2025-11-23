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

export const TfiLayoutListThumb = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15 4H6V3h9zM6 5v1h11V5zM0 2h5v5H0zm1 4h3V3H1zm14 4H6v1h9zm-9 3h11v-1H6zM0 9h5v5H0zm1 4h3v-3H1z" />
      </G>
    </Svg>
  );
};