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

export const IoDisc = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M256 176a80 80 0 1 0 80 80 80.09 80.09 0 0 0-80-80m0 112a32 32 0 1 1 32-32 32 32 0 0 1-32 32" />
        <Path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61M256 368a112 112 0 1 1 112-112 112.12 112.12 0 0 1-112 112" />
      </G>
    </Svg>
  );
};