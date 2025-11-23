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

export const FcCameraIdentification = (props: IconProps) => {
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
        <Path fill="#512DA8" d="M33.9 12.1H14.2L17.6 7c.4-.6 1-.9 1.7-.9h9.6c.7 0 1.3.3 1.7.9z" />
        <Path fill="#8667C4" d="M14 11H8V9.2C8 8.5 8.5 8 9.2 8h3.6c.7 0 1.2.5 1.2 1.2z" />
        <Path fill="#5E35B1" d="M40 42H8c-2.2 0-4-1.8-4-4V14c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4" />
        <Circle cx={24} cy={26} r={12} fill="#512DA8" />
        <Circle cx={24} cy={26} r={9} fill="#B388FF" />
        <Path d="m38.912 40.703 1.696-1.697 7.353 7.353-1.697 1.696z" />
        <Circle cx={35} cy={35} r={10} />
        <Path fill="#37474F" d="m42.305 44.107 1.697-1.697 3.96 3.959-1.698 1.697z" />
        <Circle cx={35} cy={35} r={8} fill="#64B5F6" />
        <Path fill="#BBDEFB" d="M39.3 31.4c-1.1-1.3-2.6-2-4.2-2s-3.2.7-4.2 2c-.2.3-.2.6.1.9.3.2.6.2.9-.1.8-1 2-1.5 3.3-1.5s2.5.6 3.3 1.5c.1.1.3.2.5.2.1 0 .3 0 .4-.1.1-.2.1-.6-.1-.9" />
        <Path fill="#C7A7FF" d="M29 23c-1.2-1.4-3-2.2-4.8-2.2s-3.6.8-4.8 2.2c-.5.5-.4 1.3.1 1.8s1.3.4 1.8-.1c1.5-1.7 4.3-1.7 5.8 0 .3.3.6.4 1 .4q.45 0 .9-.3c.4-.4.5-1.3 0-1.8" />
        <Ellipse cx={11} cy={13.5} fill="#8667C4" rx={2} ry={1.5} />
      </G>
    </Svg>
  );
};