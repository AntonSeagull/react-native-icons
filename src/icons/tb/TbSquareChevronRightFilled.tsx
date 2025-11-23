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

export const TbSquareChevronRightFilled = (props: IconProps) => {
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
        <Path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7.387 6.21a1 1 0 0 0-1.32.083l-.083.094a1 1 0 0 0 .083 1.32L12.585 12l-2.292 2.293-.083.094a1 1 0 0 0 1.497 1.32l3-3 .083-.094a1 1 0 0 0-.083-1.32l-3-3z" />
      </G>
    </Svg>
  );
};