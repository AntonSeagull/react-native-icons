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

export const PiArrowLineUpDuotone = (props: IconProps) => {
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
        <Path d="M200 144H56l72-72Z" opacity={0.2} />
        <Path d="M133.66 66.34a8 8 0 0 0-11.32 0l-72 72A8 8 0 0 0 56 152h64v72a8 8 0 0 0 16 0v-72h64a8 8 0 0 0 5.66-13.66ZM75.31 136 128 83.31 180.69 136ZM224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" />
      </G>
    </Svg>
  );
};