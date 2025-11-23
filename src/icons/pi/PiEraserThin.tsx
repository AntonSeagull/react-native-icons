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

export const PiEraserThin = (props: IconProps) => {
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
        <Path d="m222.15 83.22-41.38-41.37a20 20 0 0 0-28.28 0L33.85 160.48a20 20 0 0 0 0 28.29l30.06 30.06a4 4 0 0 0 2.83 1.17H216a4 4 0 0 0 0-8h-94.34l100.49-100.49a20 20 0 0 0 0-28.29M110.34 212H68.4l-28.89-28.89a12 12 0 0 1 0-17L96 109.65 154.35 168Zm106.15-106.15L160 162.34 101.65 104l56.49-56.48a12 12 0 0 1 17 0l41.37 41.37a12 12 0 0 1-.02 16.96" />
      </G>
    </Svg>
  );
};