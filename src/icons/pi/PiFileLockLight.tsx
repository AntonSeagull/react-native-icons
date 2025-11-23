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

export const PiFileLockLight = (props: IconProps) => {
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
        <Path d="M120 178h-10v-6a26 26 0 0 0-52 0v6H48a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6h72a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6m-50-6a14 14 0 0 1 28 0v6H70Zm44 46H54v-28h60Zm98.24-134.24-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v88a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-40a6 6 0 0 0 0 12h40a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48 193.52 82H158Z" />
      </G>
    </Svg>
  );
};