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

export const FcGrid = (props: IconProps) => {
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
        <Path fill="#90CAF9" d="M7 7v34h34V7zm32 8h-6V9h6zm-14 0V9h6v6zm6 2v6h-6v-6zm-8-2h-6V9h6zm0 2v6h-6v-6zm-8 6H9v-6h6zm0 2v6H9v-6zm2 0h6v6h-6zm6 8v6h-6v-6zm2 0h6v6h-6zm0-2v-6h6v6zm8-6h6v6h-6zm0-2v-6h6v6zM15 9v6H9V9zM9 33h6v6H9zm24 6v-6h6v6z" />
      </G>
    </Svg>
  );
};