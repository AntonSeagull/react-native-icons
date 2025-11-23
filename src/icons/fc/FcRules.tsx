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

export const FcRules = (props: IconProps) => {
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
        <Path fill="#42A5F5" d="M39 45H9s-3-.1-3-8h36c0 7.9-3 8-3 8" />
        <Path fill="#90CAF9" d="M8 3h32v34H8z" />
        <Path d="M18 15h16v2H18zM18 19h16v2H18zM18 23h16v2H18zM18 27h16v2H18zM18 31h16v2H18z" />
        <Path d="M14 15h2v2h-2zM14 19h2v2h-2zM14 23h2v2h-2zM14 27h2v2h-2zM14 31h2v2h-2z" />
      </G>
    </Svg>
  );
};