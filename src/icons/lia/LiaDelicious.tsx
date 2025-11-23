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

export const LiaDelicious = (props: IconProps) => {
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
        <Path d="M10 5c-2.75 0-5 2.25-5 5v12c0 2.75 2.25 5 5 5h12c2.75 0 5-2.25 5-5V10c0-2.75-2.25-5-5-5Zm0 2h6v9h9v6c0 1.668-1.332 3-3 3h-6v-9H7v-6c0-1.668 1.332-3 3-3" />
      </G>
    </Svg>
  );
};