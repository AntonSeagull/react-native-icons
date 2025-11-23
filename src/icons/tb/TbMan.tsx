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

export const TbMan = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10 16v5M14 16v5M9 9h6l-1 7h-4zM5 11q2-2 4-2M19 11q-2-2-4-2M10 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
      </G>
    </Svg>
  );
};