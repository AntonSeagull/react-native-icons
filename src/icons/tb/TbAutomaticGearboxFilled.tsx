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

export const TbAutomaticGearboxFilled = (props: IconProps) => {
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
        <Path d="M18 16a3 3 0 0 1 0 6h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 4 .117-.007A1 1 0 0 0 18 18zm.5-13a2.5 2.5 0 1 1 0 5H18v1a1 1 0 0 1-.883.993L17 14a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-.5 3h.5a.5.5 0 1 0 0-1H18zm-5 0a1 1 0 0 1 0 2h-3v6h3a1 1 0 0 1 0 2h-3a2 2 0 0 1-2-2v-6H6a2 2 0 0 1-1.995-1.85L4 10V7.83A3 3 0 0 1 2 5l.005-.176a3 3 0 1 1 3.996 3.005L6 10z" />
      </G>
    </Svg>
  );
};