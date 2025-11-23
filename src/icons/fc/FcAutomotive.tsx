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

export const FcAutomotive = (props: IconProps) => {
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
        <Path fill="none" stroke="#F44336" strokeMiterlimit={10} strokeWidth={4} d="M7 20v-8c0-2.2 1.8-4 4-4h14c1.2 0 2.4.6 3.2 1.6L35 18" />
        <Circle cx={35} cy={37} r={5} />
        <Circle cx={13} cy={37} r={5} />
        <Path fill="#F44336" d="M40.2 17 33 14H7c-1.2 0-2 .8-2 2v10c0 1.2.8 2 2 2h1c0-2.8 2.2-5 5-5s5 2.2 5 5h12c0-2.8 2.2-5 5-5s5 2.2 5 5h1c1.2 0 2-.8 2-2v-5.2c0-1.6-1.2-3.2-2.8-3.8" />
        <Circle cx={24} cy={37} r={3} />
        <Circle cx={35} cy={37} r={2} />
        <Circle cx={13} cy={37} r={2} />
        <Path d="M30.4 39c-.3-.6-.4-1.3-.4-2s.2-1.4.4-2H17.6c.3.6.4 1.3.4 2s-.2 1.4-.4 2z" />
      </G>
    </Svg>
  );
};