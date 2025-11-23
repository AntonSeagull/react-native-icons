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

export const RiAngularjsFill = (props: IconProps) => {
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
        <Path d="m12 2 9.3 3.32-1.418 12.31L12 22 4.12 17.63 2.7 5.32zm0 2.21L6.186 17.26h2.168l1.169-2.92h4.935l1.168 2.92h2.168zm1.698 8.33h-3.396L12 8.45z" />
      </G>
    </Svg>
  );
};