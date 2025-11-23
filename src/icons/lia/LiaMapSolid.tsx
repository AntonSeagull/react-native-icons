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

export const LiaMapSolid = (props: IconProps) => {
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
        <Path d="m28 4.469-1.406.625-6.625 2.843-7.625-2.875-.375-.125-.375.157-7 3-.594.25V27.53l1.406-.625 6.625-2.843 7.625 2.875.375.125.375-.157 7-3 .594-.25ZM13 7.437l6 2.25v14.876l-6-2.25ZM11 7.5v14.844L6 24.5V9.656Zm15 0v14.844L21 24.5V9.656Z" />
      </G>
    </Svg>
  );
};