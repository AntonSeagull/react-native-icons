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

export const TbManualGearboxFilled = (props: IconProps) => {
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
        <Path d="M19 3a3 3 0 0 1 1 5.829V10a3 3 0 0 1-3 3h-4v2.171A3.001 3.001 0 1 1 9 18l.005-.176A3 3 0 0 1 11 15.17V13H6v2.171A3.001 3.001 0 1 1 2 18l.005-.176A3 3 0 0 1 4 15.17V8.829A3 3 0 0 1 2 6l.005-.176a3 3 0 1 1 3.996 3.005L6 11h5V8.83A3 3 0 0 1 9 6l.005-.176a3 3 0 1 1 3.996 3.005L13 11h4a1 1 0 0 0 1-1V8.83A3 3 0 0 1 16 6l.005-.176A3 3 0 0 1 19 3" />
      </G>
    </Svg>
  );
};