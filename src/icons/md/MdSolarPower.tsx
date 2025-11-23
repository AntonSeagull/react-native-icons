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

export const MdSolarPower = (props: IconProps) => {
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
        <Path d="M3.33 16H11v-3H4zM13 16h7.67L20 13h-7zM21.11 18H13v4h9zM2 22h9v-4H2.89zM11 8h2v3h-2zM15.764 7.205l1.415-1.414L19.3 7.912l-1.414 1.414zM4.705 7.913 6.826 5.79 8.24 7.206 6.12 9.327zM3 2h3v2H3zM18 2h3v2h-3zM12 7c2.76 0 5-2.24 5-5H7c0 2.76 2.24 5 5 5" />
      </G>
    </Svg>
  );
};