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

export const FcGenealogy = (props: IconProps) => {
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
        <Path fill="#CFD8DC" d="M40 9V7h-9v5H15v11H8v2h7v11h16v5h9v-2h-7v-8h7v-2h-9v5H17V14h14v5h9v-2h-7V9z" />
        <Path fill="#00BCD4" d="M4 20h8v8H4z" />
        <Path d="M36 14h8v8h-8zM36 4h8v8h-8zM20 9h8v8h-8zM20 31h8v8h-8zM36 36h8v8h-8zM36 26h8v8h-8z" />
      </G>
    </Svg>
  );
};