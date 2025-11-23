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

export const RiCornerUpRightDoubleLine = (props: IconProps) => {
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
        <Path d="M4 10v9h2v-7h6.172l-3.95 3.95 1.414 1.414L16 11 9.636 4.636 8.222 6.05l3.95 3.95zm11.25-5.364L13.836 6.05l4.95 4.95-4.95 4.95 1.414 1.414L21.614 11z" />
      </G>
    </Svg>
  );
};