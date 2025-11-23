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

export const GiRoughWound = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M378.744 133.25c-238.248 24.048-68.733 98.574 81.488 161.753-254.586-53.513-69.623 96.14 22.624 194.884-97.054-61.694-215.83-120.378-320.06-142.827 234.825-17.035 26.77-138.346-134.27-172.088 185.74-1.445 164.326-12.097 8.96-152.757 131.684 75.394 215.833 97.65 341.26 111.038z" />
      </G>
    </Svg>
  );
};