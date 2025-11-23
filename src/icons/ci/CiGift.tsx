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

export const CiGift = (props: IconProps) => {
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
        <Path d="M19.435 5.568h-2.38a1.98 1.98 0 0 0-.51-1.92 2.02 2.02 0 0 0-2.83 0L12 5.367l-1.71-1.719a2 2 0 0 0-2.83 0 1.98 1.98 0 0 0-.51 1.92H4.565a1.5 1.5 0 0 0-1.5 1.5v1A1.49 1.49 0 0 0 4 9.448v8.99a2.507 2.507 0 0 0 2.5 2.5h11a2.5 2.5 0 0 0 2.5-2.5v-8.98a1.51 1.51 0 0 0 .94-1.39v-1a1.5 1.5 0 0 0-1.505-1.5M8.165 4.357a1 1 0 0 1 1.41 0l1.21 1.211h-2.77a.99.99 0 0 1 .15-1.211M11 19.938H6.5a1.5 1.5 0 0 1-1.5-1.5v-8.87h6Zm0-11.37H4.565a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H11Zm3.43-4.211A1 1 0 0 1 16 5.568h-2.78ZM19 18.438a1.5 1.5 0 0 1-1.5 1.5H13V9.568h6Zm.94-10.37a.5.5 0 0 1-.5.5H13v-2h6.44a.5.5 0 0 1 .5.5Z" />
      </G>
    </Svg>
  );
};