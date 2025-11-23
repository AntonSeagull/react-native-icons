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

export const ImWoman = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M4 1.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 4 1.5M13 1.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 13 1.5M4 4H1a1 1 0 0 0-1 1v5h1v6h1.25v-6h.5v6H4v-6h1V5a1 1 0 0 0-1-1M15.234 8 16 7.445l-2.083-3.221a.5.5 0 0 0-.417-.225h-4a.5.5 0 0 0-.417.225L7 7.445 7.766 8l1.729-2.244.601 1.402-2.095 3.841h1.917l.333 5h1v-5h.5v5h1l.333-5h1.917l-2.095-3.842.601-1.402 1.729 2.244z" />
      </G>
    </Svg>
  );
};