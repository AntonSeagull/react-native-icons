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

export const LiaOpenid = (props: IconProps) => {
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
        <Path d="m19 4-4 1.938v19.687c-5.145-.672-8.062-3.023-8.062-5.969 0-2.761 2.984-5.101 7.062-5.843v-2.5c-6.277.796-11 4.23-11 8.343 0 4.293 4.52 7.817 12 8.438l4-1.875Zm1 7.375v2.531c1.313.281 2.504.739 3.5 1.313l-2.125 1.187L29 18.063l-.531-5.625-2.032 1.124c-1.75-1.062-3.968-1.82-6.437-2.187" />
      </G>
    </Svg>
  );
};