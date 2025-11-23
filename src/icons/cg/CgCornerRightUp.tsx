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

export const CgCornerRightUp = (props: IconProps) => {
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
        <Path fill="currentColor" d="M9.29 10.625 7.877 9.21l6.37-6.358 6.358 6.37-1.416 1.413-3.78-3.789-.01 10.306a4 4 0 0 1-4.004 3.996l-8-.007.002-2 8 .007a2 2 0 0 0 2.002-1.998l.01-10.636z" />
      </G>
    </Svg>
  );
};