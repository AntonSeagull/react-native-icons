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

export const LiaFortAwesome = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15.5 4c-.275 0-.5.225-.5.5V12h-2v-2h-2v2H8.994v-2H7v9H5v-2H3v10h10v-3a3 3 0 1 1 6 0v3h10V17h-2v2h-2v-9h-2.006v2H21v-2h-2v2h-2v-2h-1V7.906c.275-.1.725-.228 1.275-.238.762-.01 1.137.199 1.95.289.347.043.844.072 1.474-.006A.35.35 0 0 0 21 7.607V4.432c0-.1-.113-.17-.238-.15-.662.08-1.175.049-1.537.009-.813-.09-1.188-.309-1.95-.289-.55.01-1 .138-1.275.238v.26c0-.275-.225-.5-.5-.5M11 14h2v4h-2zm8 0h2v4h-2z" />
      </G>
    </Svg>
  );
};