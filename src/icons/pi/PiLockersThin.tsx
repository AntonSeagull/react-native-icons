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

export const PiLockersThin = (props: IconProps) => {
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
        <Path d="M188 72a4 4 0 0 1-4 4h-24a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4m-4 28h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8M72 76h24a4 4 0 0 0 0-8H72a4 4 0 0 0 0 8m24 24H72a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m124-52v176a4 4 0 0 1-8 0v-20h-80v20a4 4 0 0 1-8 0v-20H44v20a4 4 0 0 1-8 0V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-96 148V44H48a4 4 0 0 0-4 4v148Zm8 0h80V48a4 4 0 0 0-4-4h-76Z" />
      </G>
    </Svg>
  );
};