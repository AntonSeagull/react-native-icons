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

export const TiPi = (props: IconProps) => {
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
        <Path d="M18.707 8.535a1 1 0 0 0-1.414 0 3.247 3.247 0 0 1-4.586 0 5.25 5.25 0 0 0-7.414 0 .999.999 0 1 0 1.414 1.414c.374-.374.82-.624 1.293-.776V17a1 1 0 1 0 2 0V9.174a3.2 3.2 0 0 1 1.293.775A5.22 5.22 0 0 0 14 11.386V17a1 1 0 1 0 2 0v-5.614a5.2 5.2 0 0 0 2.707-1.437 1 1 0 0 0 0-1.414" />
      </G>
    </Svg>
  );
};