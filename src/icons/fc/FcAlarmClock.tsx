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

export const FcAlarmClock = (props: IconProps) => {
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
        <Path d="m38.5 44.6-4-4 2.1-2.1 4 4c.6.6.6 1.5 0 2.1-.5.5-1.5.5-2.1 0M9.5 44.6l4-4-2.1-2.1-4 4c-.6.6-.6 1.5 0 2.1.5.5 1.5.5 2.1 0" />
        <Circle cx={24} cy={24} r={20} fill="#C62828" />
        <Circle cx={24} cy={24} r={16} fill="#eee" />
        <Path fill="#E53935" d="m15.096 33.48-.566-.566 9.191-9.191.566.565z" />
        <Path d="M23 11h2v13h-2z" />
        <Path d="M31.285 29.654 29.66 31.28l-6.504-6.504 1.626-1.627z" />
        <Circle cx={24} cy={24} r={2} />
        <Circle cx={24} cy={24} r={1} fill="#C62828" />
        <Path fill="#37474F" d="M22 1h4v3h-4z" />
        <Path d="M44.4 16.2c2.5-3.5 2.1-8.4-1-11.5s-8-3.5-11.5-1zM3.6 16.2c-2.5-3.5-2.1-8.4 1-11.5s8-3.5 11.5-1z" />
      </G>
    </Svg>
  );
};