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

export const FcOrgUnit = (props: IconProps) => {
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
        <Path fill="#90CAF9" d="M10 10v28h28V10zm24 24H14V14h20z" />
        <Path fill="#D81B60" d="M6 6h12v12H6z" />
        <Path d="M30 6h12v12H30zM6 30h12v12H6zM30 30h12v12H30z" />
      </G>
    </Svg>
  );
};