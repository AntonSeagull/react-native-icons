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

export const TfiLink = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m12.983 6.94-.938.938-.707-.707.938-.938c.975-.975.975-2.561 0-3.535s-2.561-.975-3.535 0L5.754 5.686c-.975.975-.975 2.561 0 3.535s2.561.975 3.535 0l.707.707c-.683.683-1.578 1.023-2.475 1.023s-1.792-.341-2.474-1.023a3.504 3.504 0 0 1 0-4.949l2.987-2.987a3.5 3.5 0 0 1 4.949 0 3.5 3.5 0 0 1 0 4.948M6.042 8.034l-.13.129.705.709.131-.13c.975-.975 2.561-.975 3.535 0s.975 2.561 0 3.535L7.26 15.302c-.975.975-2.561.975-3.535 0s-.975-2.561 0-3.535l1.058-1.059-.707-.707-1.058 1.059a3.504 3.504 0 0 0 0 4.949c.683.683 1.578 1.023 2.475 1.023s1.792-.341 2.475-1.023l3.023-3.024a3.504 3.504 0 0 0 0-4.949 3.503 3.503 0 0 0-4.949-.002" />
      </G>
    </Svg>
  );
};