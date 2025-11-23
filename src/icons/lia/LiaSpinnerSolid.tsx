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

export const LiaSpinnerSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 3a3 3 0 1 0 .002 6.002A3 3 0 0 0 16 3M8.938 6.438a2.5 2.5 0 0 0-2.5 2.5c0 1.378 1.12 2.5 2.5 2.5 1.378 0 2.5-1.122 2.5-2.5 0-1.38-1.122-2.5-2.5-2.5m14.125 1.5c-.551 0-1 .449-1 1s.449 1 1 1 1-.45 1-1c0-.551-.45-1-1-1M6 13.75a2.25 2.25 0 1 0 .001 4.501A2.25 2.25 0 0 0 6 13.75m20 1c-.691 0-1.25.559-1.25 1.25s.559 1.25 1.25 1.25 1.25-.559 1.25-1.25-.559-1.25-1.25-1.25M8.938 21.063c-1.106 0-2 .894-2 2s.894 2 2 2 2-.895 2-2c0-1.106-.895-2-2-2m14.125.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M16 24.25c-.965 0-1.75.785-1.75 1.75s.785 1.75 1.75 1.75 1.75-.785 1.75-1.75-.785-1.75-1.75-1.75" />
      </G>
    </Svg>
  );
};