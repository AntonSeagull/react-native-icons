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

export const TfiLayoutMenuV = (props: IconProps) => {
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
        <Path d="M3 1v3h11V1zm10 2H4V2h9zM3 8h11V5H3zm1-2h9v1H4zm-1 5.997h11v-3H3zm1-2h9v1H4zm-1 6h11v-3H3zm1-2h9v1H4z" />
      </G>
    </Svg>
  );
};