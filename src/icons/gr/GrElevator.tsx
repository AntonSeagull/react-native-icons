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

export const GrElevator = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeWidth={2} d="M1 2.991C1 1.891 1.89 1 2.991 1H21.01C22.109 1 23 1.89 23 2.991V21.01c0 1.1-.89 1.991-1.991 1.991H2.99A1.99 1.99 0 0 1 1 21.009zM16.5 8l1.5 2h-3zm0 8 1.5-2h-3zM5 13l1.556-3.112C6.801 9.398 7.444 9 8 9h0c.552 0 1.2.398 1.444.888L11 13m-4.5 5 1.25-8h.5l1.25 8M8 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      </G>
    </Svg>
  );
};