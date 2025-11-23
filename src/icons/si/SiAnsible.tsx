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

export const SiAnsible = (props: IconProps) => {
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
        <Path d="m10.617 11.473 4.686 3.695-3.102-7.662zM12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0m5.797 17.305a.85.85 0 0 1-.875.83c-.236 0-.416-.09-.664-.293l-6.19-5-2.079 5.203H6.191L11.438 5.44a.79.79 0 0 1 .764-.506.76.76 0 0 1 .742.506l4.774 11.494c.045.111.08.234.08.348z" />
      </G>
    </Svg>
  );
};