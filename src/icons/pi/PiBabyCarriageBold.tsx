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

export const PiBabyCarriageBold = (props: IconProps) => {
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
        <Path d="M160 28h-8a20 20 0 0 0-20 20v52H58.16A40.07 40.07 0 0 0 20 72a12 12 0 0 0 0 24 16 16 0 0 1 16 16 84.09 84.09 0 0 0 84 84h40a84 84 0 0 0 0-168m48.06 48.12A59.6 59.6 0 0 1 218.79 100h-40.58ZM160 52a59.66 59.66 0 0 1 29.83 8L156 87V52Zm0 120h-40a60.1 60.1 0 0 1-58.79-48h157.58A60.1 60.1 0 0 1 160 172m-52 52a20 20 0 1 1-20-20 20 20 0 0 1 20 20m104 0a20 20 0 1 1-20-20 20 20 0 0 1 20 20" />
      </G>
    </Svg>
  );
};