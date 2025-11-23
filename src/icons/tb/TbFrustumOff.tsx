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

export const TbFrustumOff = (props: IconProps) => {
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
        <Path d="m7.72 3.728 3.484-1.558a1.95 1.95 0 0 1 1.59 0l4.496 2.01c.554.246.963.736 1.112 1.328l2.538 10.158c.103.412.07.832-.075 1.206m-2.299 1.699-5.725 2.738a1.95 1.95 0 0 1-1.682 0l-7.035-3.365a1.99 1.99 0 0 1-1.064-2.278l2.52-10.08" />
        <Path d="m18 4.82-5.198 2.324a1.96 1.96 0 0 1-1.602 0M12 7.32V8m0 4v9.5M3 3l18 18" />
      </G>
    </Svg>
  );
};