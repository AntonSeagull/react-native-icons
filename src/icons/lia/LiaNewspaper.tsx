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

export const LiaNewspaper = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3 5v18c0 2.21 1.79 4 4 4h18c2.21 0 4-1.79 4-4V12h-6V5Zm2 2h16v16c0 .73.223 1.41.563 2H7c-1.191 0-2-.809-2-2Zm2 2v5h12V9Zm2 2h8v1H9Zm14 3h4v9c0 1.191-.809 2-2 2s-2-.809-2-2ZM7 15v2h5v-2Zm7 0v2h5v-2Zm-7 3v2h5v-2Zm7 0v2h5v-2Zm-7 3v2h5v-2Zm7 0v2h5v-2Z" />
      </G>
    </Svg>
  );
};