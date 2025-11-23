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

export const CgCompressLeft = (props: IconProps) => {
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
        <Path fill="currentColor" d="m7.979 9.457-3.57-.003-.002 2 7 .006.006-7-2-.002L9.41 8.06 3.096 1.77 1.685 3.185zM19.562 14.552l-.009-2-7 .028.028 7 2-.008-.014-3.601 6.343 6.26 1.405-1.424-6.324-6.24z" />
      </G>
    </Svg>
  );
};