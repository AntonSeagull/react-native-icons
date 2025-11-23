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

export const FcOldTimeCamera = (props: IconProps) => {
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
        <Path fill="#546E7A" d="M14 13H8v-1.8c0-.7.5-1.2 1.2-1.2h3.6c.7 0 1.2.5 1.2 1.2z" />
        <Path fill="#5E35B1" d="M40 40H8c-2.2 0-4-1.8-4-4V22h40v14c0 2.2-1.8 4-4 4" />
        <Path fill="#42257A" d="M12.7 22c-.4 1.3-.7 2.6-.7 4 0 6.6 5.4 12 12 12s12-5.4 12-12c0-1.4-.3-2.7-.7-4z" />
        <Path fill="#78909C" d="M8 12h32c2.2 0 4 1.8 4 4v6H4v-6c0-2.2 1.8-4 4-4" />
        <Path fill="#78909C" d="M33.9 13.1H14.2L17.6 8c.4-.6 1-.9 1.7-.9h9.6c.7 0 1.3.3 1.7.9z" />
        <Path fill="#455A64" d="M35.3 22c-1.6-4.7-6.1-8-11.3-8s-9.7 3.3-11.3 8z" />
        <Circle cx={24} cy={26} r={9} fill="#B388FF" />
        <Path fill="#C7A7FF" d="M29 23c-1.2-1.4-3-2.2-4.8-2.2s-3.6.8-4.8 2.2c-.5.5-.4 1.3.1 1.8s1.3.4 1.8-.1c1.5-1.7 4.3-1.7 5.8 0 .3.3.6.4 1 .4q.45 0 .9-.3c.4-.4.5-1.3 0-1.8" />
        <Path fill="#DBE2E5" d="M36 15h5v4h-5z" />
      </G>
    </Svg>
  );
};