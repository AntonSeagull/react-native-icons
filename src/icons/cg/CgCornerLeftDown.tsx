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

export const CgCornerLeftDown = (props: IconProps) => {
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
        <Path fill="currentColor" d="M10.601 6.85a2 2 0 0 1 2.002-1.998l8 .007.002-2-8-.007a4 4 0 0 0-4.004 3.996l-.01 10.306-3.78-3.788-1.416 1.412 6.358 6.37 6.37-6.358-1.413-1.415-4.119 4.11z" />
      </G>
    </Svg>
  );
};