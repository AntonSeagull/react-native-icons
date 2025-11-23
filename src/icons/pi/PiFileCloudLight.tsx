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

export const PiFileCloudLight = (props: IconProps) => {
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
        <Path d="m212.24 83.76-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v88a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-24a6 6 0 0 0 0 12h24a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48 193.52 82H158ZM108 130a50 50 0 0 0-46.66 32H60a34 34 0 0 0 0 68h48a50 50 0 0 0 0-100m0 88H60a22 22 0 0 1-1.65-43.94c-.06.47-.1.93-.15 1.4a6 6 0 1 0 12 1.08 38.6 38.6 0 0 1 1.1-6.54 6 6 0 0 0 .24-.86A38 38 0 1 1 108 218" />
      </G>
    </Svg>
  );
};