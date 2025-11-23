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

export const SiBentobox = (props: IconProps) => {
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
        <Path d="m7.406 3.821 2.723-2.725a3.74 3.74 0 0 1 5.29 0l.078.078a3.74 3.74 0 0 1 0 5.29l-2.723 2.723zm7.407 7.407 2.723-2.723a3.74 3.74 0 0 1 5.29 0l.078.078a3.74 3.74 0 0 1 0 5.29l-2.725 2.723-5.369-5.368zM0 11.228l2.723-2.723a3.74 3.74 0 0 1 5.29 0l.079.078a3.74 3.74 0 0 1 0 5.29l-2.724 2.723zm7.406 7.406 2.723-2.723a3.74 3.74 0 0 1 5.29 0l.078.078a3.74 3.74 0 0 1 0 5.29L12.774 24z" />
      </G>
    </Svg>
  );
};