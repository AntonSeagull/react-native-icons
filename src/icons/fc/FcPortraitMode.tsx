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

export const FcPortraitMode = (props: IconProps) => {
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
        <Path fill="#FF9800" d="M22 38c-4.8 0-5-7-5-7v-6h10v6s-.2 7-5 7" />
        <Circle cx={31} cy={19} r={2} />
        <Circle cx={13} cy={19} r={2} />
        <Path fill="#FFB74D" d="M31 13c0-7.6-18-5-18 0v7c0 5 4 9 9 9s9-4 9-9z" />
        <Path fill="#424242" d="M22 4c-6.1 0-10 4.9-10 11v2.3l2 1.7v-5l12-4 4 4v5l2-1.7V15c0-4-1-8-6-9l-1-2z" />
        <Circle cx={26} cy={19} r={1} />
        <Circle cx={18} cy={19} r={1} />
        <Path fill="#009688" d="M27 31s-1.8 2-5 2-5-2-5-2S6 33 6 44h32c0-11-11-13-11-13" />
        <Path d="m40.997 4.065 7 7-7 6.999-7-7z" />
        <Path d="M36 6h10v10H36z" />
        <Circle cx={41} cy={11} r={3} fill="#FFEB3B" />
      </G>
    </Svg>
  );
};