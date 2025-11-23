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

export const LiaBluetoothB = (props: IconProps) => {
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
        <Path d="M14 3.594v9.969L9.719 9.28 8.28 10.72 13.562 16l-5.28 5.281 1.437 1.438L14 18.437v9.97l1.719-1.688 5-5 .687-.719-.687-.719L16.437 16l4.282-4.281.687-.719-.687-.719-5-5Zm2 4.844L18.563 11 16 13.563Zm0 10L18.563 21 16 23.563Z" />
      </G>
    </Svg>
  );
};