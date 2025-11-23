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

export const PiFileMdLight = (props: IconProps) => {
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
        <Path d="m212.24 83.76-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v130a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24M158 46.48 193.52 82H158ZM144 146h-16a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h16a34 34 0 0 0 0-68m0 56h-10v-44h10a22 22 0 0 1 0 44m-42-50v56a6 6 0 0 1-12 0v-37l-17.08 24.44a6 6 0 0 1-9.84 0L46 171v37a6 6 0 0 1-12 0v-56a6 6 0 0 1 10.92-3.44l23.08 33 23.08-33A6 6 0 0 1 102 152" />
      </G>
    </Svg>
  );
};