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

export const DiGhostSmall = (props: IconProps) => {
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
        <Path fill="#444" d="M4.859 7.401v2.115h13.256V5.285H4.859zm18.051 0v2.115h4.231V5.285H22.91zM4.859 16.427v2.115h22.282v-4.231H4.859zm0 8.884v1.974h8.744v-3.949H4.859zm13.539 0v1.974h8.744v-3.949h-8.744z" />
      </G>
    </Svg>
  );
};