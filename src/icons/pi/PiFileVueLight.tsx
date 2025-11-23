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

export const PiFileVueLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m85.65 154-20 56a6 6 0 0 1-11.3 0l-20-56a6 6 0 1 1 11.3-4L60 190.16 74.35 150a6 6 0 0 1 11.3 4M208 158a6 6 0 0 0 0-12h-32a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h32a6 6 0 0 0 0-12h-26v-16h18a6 6 0 0 0 0-12h-18v-16Zm-64-12a6 6 0 0 0-6 6v38a12 12 0 0 1-24 0v-38a6 6 0 0 0-12 0v38a24 24 0 0 0 48 0v-38a6 6 0 0 0-6-6m70-58v24a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-20.48-6L158 46.48V82Z" />
      </G>
    </Svg>
  );
};