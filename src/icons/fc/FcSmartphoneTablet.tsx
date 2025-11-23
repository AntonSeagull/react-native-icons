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

export const FcSmartphoneTablet = (props: IconProps) => {
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
        <Path fill="#37474F" d="M4 39V7c0-2.2 1.8-4 4-4h22c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4" />
        <Path fill="#BBDEFB" d="M30 6H8c-.6 0-1 .4-1 1v29c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1" />
        <Path fill="#78909C" d="M15 39h6v2h-6z" />
        <Path fill="#E38939" d="M24 41V17c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H28c-2.2 0-4-1.8-4-4" />
        <Path fill="#FFF3E0" d="M40 16H28c-.6 0-1 .4-1 1v22c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V17c0-.6-.4-1-1-1" />
        <Circle cx={34} cy={42.5} r={1.5} fill="#A6642A" />
      </G>
    </Svg>
  );
};