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

export const PiPersonSimpleCircleThin = (props: IconProps) => {
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
        <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92M116 80a12 12 0 1 1 12 12 12 12 0 0 1-12-12m64 32a4 4 0 0 1-4 4h-44v18.79l31.33 47a4 4 0 0 1-6.66 4.44l-28.67-43-28.67 43a4 4 0 1 1-6.66-4.44l31.33-47V116H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};