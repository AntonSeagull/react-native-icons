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

export const FcTreeStructure = (props: IconProps) => {
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
        <Path fill="#90CAF9" d="m36.9 13.8-1.8-3.6L7.5 24l27.6 13.8 1.8-3.6L16.5 24z" />
        <Path fill="#D81B60" d="M6 18h12v12H6z" />
        <Path d="M30 6h12v12H30zM30 30h12v12H30z" />
      </G>
    </Svg>
  );
};