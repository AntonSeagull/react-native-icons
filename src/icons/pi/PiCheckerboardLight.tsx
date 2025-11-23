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

export const PiCheckerboardLight = (props: IconProps) => {
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
        <Path d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m-13.52 88L134 61.52V46h15.52L210 106.48V122ZM134 78.48 177.52 122H134ZM210 48v41.52L166.48 46H208a2 2 0 0 1 2 2M48 46h74v76H46V48a2 2 0 0 1 2-2m58.48 164L46 149.52V134h15.52L122 194.48V210ZM122 177.52 78.48 134H122ZM46 208v-41.52L89.52 210H48a2 2 0 0 1-2-2m162 2h-74v-76h76v74a2 2 0 0 1-2 2" />
      </G>
    </Svg>
  );
};