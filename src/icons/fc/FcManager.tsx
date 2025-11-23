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

export const FcManager = (props: IconProps) => {
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
        <Path fill="#FF9800" d="m24 37-5-6v-6h10v6z" />
        <Circle cx={33} cy={19} r={2} />
        <Circle cx={15} cy={19} r={2} />
        <Path fill="#FFB74D" d="M33 13c0-7.6-18-5-18 0v7c0 5 4 9 9 9s9-4 9-9z" />
        <Path fill="#FF5722" d="M24 4c-6.1 0-10 4.9-10 11v2.3l2 1.7v-5l12-4 4 4v5l2-1.7V15c0-4-1-8-6-9l-1-2z" />
        <Circle cx={28} cy={19} r={1} />
        <Circle cx={20} cy={19} r={1} />
        <Path fill="#CFD8DC" d="m29 31-5 1-5-1S8 33 8 44h32c0-11-11-13-11-13" />
        <Path fill="#3F51B5" d="m23 35-1 9h4l-1-9 1-1-2-2-2 2z" />
      </G>
    </Svg>
  );
};