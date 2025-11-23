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

export const DiGit = (props: IconProps) => {
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
        <Path fill="#444" d="m26.852 15.281-9.848-9.848a1.453 1.453 0 0 0-2.054 0l-2.045 2.045 2.594 2.594a1.725 1.725 0 0 1 2.185 2.199l2.5 2.5a1.728 1.728 0 1 1-1.035.974l-2.332-2.332v6.136a1.73 1.73 0 1 1-1.421-.05v-6.193a1.729 1.729 0 0 1-.938-2.266l-2.557-2.558-6.753 6.752a1.454 1.454 0 0 0 0 2.055l9.849 9.848a1.453 1.453 0 0 0 2.054 0l9.802-9.802a1.454 1.454 0 0 0 0-2.055z" />
      </G>
    </Svg>
  );
};