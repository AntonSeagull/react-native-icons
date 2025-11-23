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

export const FcTwoSmartphones = (props: IconProps) => {
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
        <Path fill="#37474F" d="M6 36V8c0-2.2 1.8-4 4-4h14c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4" />
        <Path fill="#BBDEFB" d="M24 7H10c-.6 0-1 .4-1 1v25c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1" />
        <Path fill="#78909C" d="M14 36h6v2h-6z" />
        <Path fill="#E38939" d="M20 40V12c0-2.2 1.8-4 4-4h14c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4H24c-2.2 0-4-1.8-4-4" />
        <Path fill="#FFF3E0" d="M38 11H24c-.6 0-1 .4-1 1v25c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V12c0-.6-.4-1-1-1" />
        <Circle cx={31} cy={41} r={1.5} fill="#A6642A" />
      </G>
    </Svg>
  );
};