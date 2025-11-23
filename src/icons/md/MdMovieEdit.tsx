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

export const MdMovieEdit = (props: IconProps) => {
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
        <Path d="M4 10h18V6c0-1.1-.9-2-2-2h-3l2 4h-3l-2-4h-2l2 4h-3L9 4H7l2 4H6L4 4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h8v-2H4zM14 18.88V21h2.12l5.17-5.17-2.12-2.12zM22.71 13l-.71-.71a.996.996 0 0 0-1.41 0l-.71.71L22 15.12l.71-.71a.996.996 0 0 0 0-1.41" />
      </G>
    </Svg>
  );
};