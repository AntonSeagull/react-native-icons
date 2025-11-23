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

export const PiUserSquareBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 24v144.24a83.63 83.63 0 0 0-39.08-39.67 52 52 0 1 0-73.84 0A83.63 83.63 0 0 0 52 196.24V52Zm-104 68a28 28 0 1 1 28 28 28 28 0 0 1-28-28m28 52a59.34 59.34 0 0 1 37.69 13.31A60.45 60.45 0 0 1 181.06 204H74.94a60.45 60.45 0 0 1 15.37-18.69A59.34 59.34 0 0 1 128 172" />
      </G>
    </Svg>
  );
};