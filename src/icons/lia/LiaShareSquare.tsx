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

export const LiaShareSquare = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M23.414 4.438 22 5.852 26.168 10H16.5a5.506 5.506 0 0 0-5.5 5.5c0 3.033 2.468 5.5 5.5 5.5h.5v-2h-.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5h9.672l-4.164 4.164 1.414 1.414L30 11zM5 5v22h22V17l-2 2v6H7V7h10.854l2-2z" />
      </G>
    </Svg>
  );
};