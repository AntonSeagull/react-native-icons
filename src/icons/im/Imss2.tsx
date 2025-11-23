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

export const Imss2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M13.893 2.809a.499.499 0 0 0-.393-.808h-11a.501.501 0 0 0-.393.808L7 9.037V15H5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H9V9.037zM12.471 3 10.9 5H5.1L3.529 3h8.943z" />
      </G>
    </Svg>
  );
};