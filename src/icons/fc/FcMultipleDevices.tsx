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

export const FcMultipleDevices = (props: IconProps) => {
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
        <Path fill="#546E7A" d="M4 28V8c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4" />
        <Path fill="#BBDEFB" d="M36 7H8c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1" />
        <Path fill="#37474F" d="M38 33H6c-2.2 0-4-1.8-4-4h40c0 2.2-1.8 4-4 4" />
        <Path fill="#E38939" d="M24 40V16c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H28c-2.2 0-4-1.8-4-4" />
        <Path fill="#FFF3E0" d="M40 15H28c-.6 0-1 .4-1 1v22c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V16c0-.6-.4-1-1-1" />
        <Circle cx={34} cy={41.5} r={1.5} fill="#A6642A" />
      </G>
    </Svg>
  );
};