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

export const SiMainwp = (props: IconProps) => {
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
        <Path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m0 2.4c1.325 0 2.4 1.076 2.4 2.4a2.4 2.4 0 0 1-.703 1.696 2.4 2.4 0 0 1-.595.436l2.978 12.267L12 21.602l-4.08-2.403 2.978-12.267a2.4 2.4 0 0 1-.593-.436 2.4 2.4 0 0 1-.703-1.695A2.4 2.4 0 0 1 12 2.4" />
      </G>
    </Svg>
  );
};