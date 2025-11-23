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

export const PiKanbanFill = (props: IconProps) => {
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
        <Path d="M160 56v96a8 8 0 0 1-8 8h-40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8m64-8h-40a8 8 0 0 0-8 8v52a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4V56a8 8 0 0 0-8-8m4 80h-48a4 4 0 0 0-4 4v44a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-44a4 4 0 0 0-4-4M80 48H40a8 8 0 0 0-8 8v52a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4V56a8 8 0 0 0-8-8m4 80H36a4 4 0 0 0-4 4v76a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-76a4 4 0 0 0-4-4" />
      </G>
    </Svg>
  );
};