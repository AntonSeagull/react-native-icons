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

export const FcBrokenLink = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M17.5 27c-1.1 1.2-2.7 2-4.5 2h-3c-3.3 0-6-2.7-6-6s2.7-6 6-6h3c1.8 0 3.4.8 4.5 2h4.7c-1.5-3.5-5.1-6-9.2-6h-3C4.5 13 0 17.5 0 23s4.5 10 10 10h3c4.1 0 7.6-2.5 9.2-6zM38 13h-3c-4.1 0-7.6 2.5-9.2 6h4.7c1.1-1.2 2.7-2 4.5-2h3c3.3 0 6 2.7 6 6s-2.7 6-6 6h-3c-1.8 0-3.4-.8-4.5-2h-4.7c1.5 3.5 5.1 6 9.2 6h3c5.5 0 10-4.5 10-10s-4.5-10-10-10" />
        <Path d="M19.5 4 16 6l6.1 8.1 1.3-.8zM28.5 4 32 6l-6.1 8.1-1.3-.8zM28.5 44l3.5-2-6.1-8.1-1.3.8zM19.5 44 16 42l6.1-8.1 1.3.8z" />
      </G>
    </Svg>
  );
};