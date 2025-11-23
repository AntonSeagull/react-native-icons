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

export const LiaViharaSolid = (props: IconProps) => {
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
        <Path d="M16 3.7 8.1 10H10v2.523L5.1 16.2l1.9.924v3.404l-5 3.774 4 1.58V28h2v-2h7v2h2v-2h7v2h2v-2.115l4.1-1.584-5.1-3.848v-3.307l2-.947-5-3.75V10h1.9zm0 2.6L18.2 8h-4.3zM12 10h8v2h-8zm-.6 4h9.3l2.3 1.8-.3.2H9.2l-.2-.2zM9 18h14v2H9zm-.7 4h15.4l2.3 1.7-.7.3H6.7l-.7-.3z" />
      </G>
    </Svg>
  );
};