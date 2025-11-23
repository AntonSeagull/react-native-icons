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

export const CgFormatLineHeight = (props: IconProps) => {
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
        <Path fill="currentColor" d="M5.097 6.997h2.077l-3-3-3 3h1.923v10.006H1.159l3 3 3-3H5.097zM22.841 7h-14V5h14zM22.841 11h-14V9h14zM8.841 15h14v-2h-14zM22.841 19h-14v-2h14z" />
      </G>
    </Svg>
  );
};