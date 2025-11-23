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

export const FcNightPortrait = (props: IconProps) => {
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
        <Path fill="#40C4FF" d="M42.9 6.3C43.6 7.4 44 8.6 44 10c0 3.9-3.1 7-7 7-.7 0-1.3-.1-1.9-.3 1.2 2 3.4 3.3 5.9 3.3 3.9 0 7-3.1 7-7 0-3.2-2.1-5.9-5.1-6.7" />
        <Circle cx={31} cy={19} r={2} />
        <Circle cx={13} cy={19} r={2} />
        <Path d="m22 37-5-6v-6h10v6z" />
        <Path fill="#D1C4E9" d="M31 13c0-7.6-18-5-18 0v7c0 5 4 9 9 9s9-4 9-9z" />
        <Circle cx={26} cy={19} r={1} />
        <Circle cx={18} cy={19} r={1} />
        <Path d="M22 4c-6.1 0-10 4.9-10 11v2.3l2 1.7v-5l12-4 4 4v5l2-1.7V15c0-4-1-8-6-9l-1-2zM27 31s-2 1-5 1-5-1-5-1S6 33 6 44h32c0-11-11-13-11-13" />
      </G>
    </Svg>
  );
};