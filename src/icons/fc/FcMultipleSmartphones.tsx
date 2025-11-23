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

export const FcMultipleSmartphones = (props: IconProps) => {
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
        <Path fill="#455A64" d="M4 31V8c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v23c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4" />
        <Path fill="#BBDEFB" d="M20 7H8c-.6 0-1 .4-1 1v21c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1" />
        <Circle cx={14} cy={32.5} r={1.5} fill="#37474F" />
        <Path fill="#546E7A" d="M14 36V13c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v23c0 2.2-1.8 4-4 4H18c-2.2 0-4-1.8-4-4" />
        <Path fill="#BBDEFB" d="M30 12H18c-.6 0-1 .4-1 1v21c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13c0-.6-.4-1-1-1" />
        <Circle cx={24} cy={37.5} r={1.5} fill="#37474F" />
        <Path fill="#E38939" d="M24 40V18c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v22c0 2.2-1.8 4-4 4H28c-2.2 0-4-1.8-4-4" />
        <Path fill="#FFF3E0" d="M40 17H28c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V18c0-.6-.4-1-1-1" />
        <Circle cx={34} cy={41.5} r={1.5} fill="#A6642A" />
      </G>
    </Svg>
  );
};