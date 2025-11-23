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

export const PiFileJpgLight = (props: IconProps) => {
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
        <Path d="M120 146h-16a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-10h10a26 26 0 0 0 0-52m0 40h-10v-28h10a14 14 0 0 1 0 28m94-2v16.87a6 6 0 0 1-1.67 4.15A28.06 28.06 0 0 1 192 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a27.43 27.43 0 0 1 15.36 4.77 6 6 0 0 1-6.72 9.95A15.25 15.25 0 0 0 192 158c-9.93 0-18 9.87-18 22s8.07 22 18 22a15.75 15.75 0 0 0 10-3.73V190h-2a6 6 0 0 1 0-12h8a6 6 0 0 1 6 6M78 152v38a24 24 0 0 1-48 0 6 6 0 0 1 12 0 12 12 0 0 0 24 0v-38a6 6 0 0 1 12 0m134.24-68.24-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24M158 82V46.48L193.52 82Z" />
      </G>
    </Svg>
  );
};