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

export const CgFilters = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M4.708 15.44a6.97 6.97 0 0 0 3.997 1.266 7 7 0 1 0 6.59-9.413A7 7 0 1 0 4.708 15.44M5.856 13.8a5 5 0 0 0 2.431.886 6.97 6.97 0 0 1 1.256-4.408 6.97 6.97 0 0 1 3.713-2.687 5 5 0 1 0-7.4 6.21m12.289-3.603a5 5 0 0 0-2.432-.885 6.97 6.97 0 0 1-1.256 4.408 6.97 6.97 0 0 1-3.713 2.687 5 5 0 1 0 7.4-6.21" clipRule="evenodd" />
      </G>
    </Svg>
  );
};