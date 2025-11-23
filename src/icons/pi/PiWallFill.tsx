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

export const PiWallFill = (props: IconProps) => {
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
        <Path d="M232 56v32a4 4 0 0 1-4 4h-92V52a4 4 0 0 1 4-4h84a8 8 0 0 1 8 8m-4 52h-44v44h44a4 4 0 0 0 4-4v-36a4 4 0 0 0-4-4M88 152h80v-44H88Zm-60 0h44v-44H28a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4m200 16h-92v36a4 4 0 0 0 4 4h84a8 8 0 0 0 8-8v-28a4 4 0 0 0-4-4M28 92h92V52a4 4 0 0 0-4-4H32a8 8 0 0 0-8 8v32a4 4 0 0 0 4 4m-4 80v28a8 8 0 0 0 8 8h84a4 4 0 0 0 4-4v-36H28a4 4 0 0 0-4 4" />
      </G>
    </Svg>
  );
};