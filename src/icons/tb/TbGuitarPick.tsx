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

export const TbGuitarPick = (props: IconProps) => {
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
        <Path d="M16 18.5C18 16 20 12 20 8c0-2.946-2.084-4.157-4.204-4.654Q14.5 3.001 12 3q-2.5 0-3.796.346C6.084 3.843 4 5.054 4 8c0 3.312 2 8 4 10.5q.445.556.963 1.081l.354.347a3.9 3.9 0 0 0 5.364 0A14 14 0 0 0 16 18.5" />
      </G>
    </Svg>
  );
};