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

export const CiBag1 = (props: IconProps) => {
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
        <Path d="M20.37 17.65a16.8 16.8 0 0 0-2.01-5.54 17 17 0 0 0-3.74-4.55l-.1-.08a.12.12 0 0 1-.02-.15l1.49-2.59a1.12 1.12 0 0 0 0-1.12 1.09 1.09 0 0 0-.97-.55H8.98a1.1 1.1 0 0 0-.97.55 1.12 1.12 0 0 0 0 1.12l1.5 2.59a.124.124 0 0 1-.03.15l-.09.08a17.33 17.33 0 0 0-5.76 10.09 4 4 0 0 0-.04.48 2.8 2.8 0 0 0 2.8 2.8h11.23a2.78 2.78 0 0 0 2.13-.99 2.83 2.83 0 0 0 .62-2.29M8.88 4.24a.1.1 0 0 1 0-.12.11.11 0 0 1 .1-.05h6.04a.14.14 0 0 1 .11.05.16.16 0 0 1 0 .12l-1.59 2.8h-3.08Zm5.09 4.08a16.44 16.44 0 0 1 5.42 9.5 1.82 1.82 0 0 1-.4 1.47 1.79 1.79 0 0 1-1.37.64H6.39a1.805 1.805 0 0 1-1.8-1.8 1.6 1.6 0 0 1 .03-.31 16.3 16.3 0 0 1 5.42-9.5l.32-.28h3.28Z" data-name="Bag 1" />
      </G>
    </Svg>
  );
};