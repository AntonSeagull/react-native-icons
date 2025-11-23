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

export const CgCornerDoubleRightDown = (props: IconProps) => {
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
        <Path fill="currentColor" d="m7.694 12.705-5.056-4.84 4.84-5.057L8.923 4.19 6.566 6.653 12.6 6.49a4.8 4.8 0 0 1 4.927 4.669l.16 5.926 2.246-2.294 1.43 1.4-4.9 5-5-4.898 1.4-1.429 2.427 2.378-.162-6.018a2.4 2.4 0 0 0-2.463-2.335l-5.898.158 2.31 2.212z" />
      </G>
    </Svg>
  );
};