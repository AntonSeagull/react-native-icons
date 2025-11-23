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

export const CiCrop = (props: IconProps) => {
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
        <Path d="M5.624 6.623H3.549a.5.5 0 0 1 0-1h2.075V3.55a.5.5 0 0 1 1 0v2.073h9.191a2.56 2.56 0 0 1 2.561 2.561v9.193h2.075a.5.5 0 0 1 0 1h-2.075v2.073a.5.5 0 0 1-1 0v-2.073H8.185a2.56 2.56 0 0 1-2.561-2.561zm11.752 10.754V8.184c0-.862-.699-1.561-1.561-1.561H6.624v9.193c0 .862.699 1.561 1.561 1.561z" />
      </G>
    </Svg>
  );
};