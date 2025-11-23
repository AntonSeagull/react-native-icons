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

export const PiBeerBottleThin = (props: IconProps) => {
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
        <Path d="m242.83 45.17-32-32a4 4 0 0 0-5.66 5.66l4.74 4.74-59.58 44.69-39.11 7.82a4 4 0 0 0-2 1.09l-83.36 83.32a20 20 0 0 0 0 28.28l41.37 41.37a20 20 0 0 0 28.28 0l83.32-83.31a4 4 0 0 0 1.09-2.05l7.82-39.11 44.69-59.58 4.74 4.74a4 4 0 1 0 5.66-5.66m-153 179.31a12 12 0 0 1-17 0l-41.32-41.37a12 12 0 0 1 0-17l8.49-8.45L98.34 216ZM104 210.34 45.66 152 96 101.66 154.34 160Zm76.8-108.74a3.9 3.9 0 0 0-.72 1.62L172.32 142 160 154.34 101.66 96 114 83.68l38.81-7.76a3.9 3.9 0 0 0 1.62-.72l61.22-45.92 11.1 11.1Z" />
      </G>
    </Svg>
  );
};