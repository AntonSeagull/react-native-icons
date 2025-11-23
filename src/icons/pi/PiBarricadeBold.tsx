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

export const PiBarricadeBold = (props: IconProps) => {
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
        <Path d="M224 60H32a20 20 0 0 0-20 20v72a20 20 0 0 0 20 20h20v28a12 12 0 0 0 24 0v-28h104v28a12 12 0 0 0 24 0v-28h20a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m-4 59-35-35h35Zm-43 29-64-64h38l64 64Zm-72 0L41 84h38l64 64Zm-69-35 35 35H36Z" />
      </G>
    </Svg>
  );
};