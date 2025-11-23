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

export const FcMoneyTransfer = (props: IconProps) => {
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
        <Path fill="#78909C" d="M40 41H8c-2.2 0-4-1.8-4-4V16.1c0-1.3.6-2.5 1.7-3.3L24 0l18.3 12.8c1.1.7 1.7 2 1.7 3.3V37c0 2.2-1.8 4-4 4" />
        <Path fill="#AED581" d="M14 1h20v31H14z" />
        <Path d="M13 0v33h22V0zm20 31H15V2h18z" />
        <Path d="M34 3c0 1.7-.3 3-2 3s-3-1.3-3-3 1.3-2 3-2 2 .3 2 2M16 1c1.7 0 3 .3 3 2s-1.3 3-3 3-2-1.3-2-3 .3-2 2-2" />
        <Circle cx={24} cy={8} r={2} />
        <Circle cx={24} cy={20} r={6} />
        <Path fill="#CFD8DC" d="M40 41H8c-2.2 0-4-1.8-4-4V17l20 13 20-13v20c0 2.2-1.8 4-4 4" />
      </G>
    </Svg>
  );
};