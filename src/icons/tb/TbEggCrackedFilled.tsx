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

export const TbEggCrackedFilled = (props: IconProps) => {
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
        <Path d="M11.236 2.066 9.542 7.713l-.029.123a1 1 0 0 0 .406.978l2.764 1.974-1.551 2.716a1 1 0 1 0 1.736.992l2-3.5.052-.105a1 1 0 0 0-.339-1.205l-2.918-2.085 1.623-5.41C16.927 3.265 20 8.688 20 14.083c0 4.59-3.273 7.71-8 7.917-4.75 0-8-3.21-8-7.917C4 8.429 7.372 2.739 11.236 2.066" />
      </G>
    </Svg>
  );
};