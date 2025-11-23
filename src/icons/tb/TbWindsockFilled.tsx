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

export const TbWindsockFilled = (props: IconProps) => {
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
        <Path d="M6 2a1 1 0 0 1 1 1v1.079l11.083.924A1 1 0 0 1 19 6v4a1 1 0 0 1-.917.997L7 11.92V20h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h1V3a1 1 0 0 1 1-1m1 4.086v3.827l3-.25V6.336zm7 .584v2.659l3-.25V6.92z" />
      </G>
    </Svg>
  );
};