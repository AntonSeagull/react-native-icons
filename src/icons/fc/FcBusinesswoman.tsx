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

export const FcBusinesswoman = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#BF360C" d="M16 15h16v18H16z" />
        <Path fill="#78909C" d="M40 44H8c0-11 11-13 11-13h10s11 2 11 13" />
        <Path fill="#FF9800" d="M24 37c-2.2 0-5-6-5-6v-6h10v6s-2.8 6-5 6" />
        <Path fill="#FFB74D" d="M33 14c0-7.6-18-5-18 0v7c0 5 4 9 9 9s9-4 9-9z" />
        <Path fill="#FF5722" d="M24 4C17.9 4 9 7.4 9 27.3l7 4.7V19l12-7 4 5v15l7-6c0-4-.7-20-11-20l-1-2z" />
        <Path fill="#FFB74D" d="M24 38c-4.4 0-5-7-5-7s2.5 4 5 4 5-4 5-4-.6 7-5 7" />
        <Circle cx={28} cy={21} r={1} fill="#784719" />
        <Circle cx={20} cy={21} r={1} fill="#784719" />
      </G>
    </Svg>
  );
};