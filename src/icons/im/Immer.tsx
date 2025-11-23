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

export const Immer = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m15.781 12.953-4.712-4.712a.75.75 0 0 0-1.061 0l-.354.354L6.779 5.72 11.499 1h-5l-2.22 2.22-.22-.22H2.998v1.061l.22.22-3.22 3.22 2.5 2.5 3.22-3.22 2.875 2.875-.354.354a.75.75 0 0 0 0 1.061l4.712 4.712a.75.75 0 0 0 1.061 0l1.768-1.768a.75.75 0 0 0 0-1.061z" />
      </G>
    </Svg>
  );
};