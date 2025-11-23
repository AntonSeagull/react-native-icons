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

export const LiaTruckPickupSolid = (props: IconProps) => {
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
        <Path d="M10.719 6a2.02 2.02 0 0 0-1.906 1.375L7.28 12H0v8.219a1.99 1.99 0 0 0 1.5 1.937l2.594.657A4 4 0 0 0 8 26c1.852 0 3.398-1.281 3.844-3h9.312c.446 1.719 1.992 3 3.844 3s3.398-1.281 3.844-3H30c1.094 0 2-.906 2-2v-3.75a4.01 4.01 0 0 0-2.906-3.844l-4.532-1.281-3.906-4.687A3.99 3.99 0 0 0 17.594 6Zm0 2H14v4H9.375ZM16 8h1.594c.593 0 1.152.262 1.531.719L21.875 12H16ZM2 14h21.844l4.718 1.344A1.96 1.96 0 0 1 30 17.25V21h-1.156c-.446-1.719-1.992-3-3.844-3s-3.398 1.281-3.844 3h-9.312c-.446-1.719-1.992-3-3.844-3-1.773 0-3.262 1.172-3.781 2.781L2 20.22Zm6 6c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2m17 0c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2" />
      </G>
    </Svg>
  );
};