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

export const PiStethoscopeLight = (props: IconProps) => {
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
        <Path d="M218 160a10 10 0 1 1-10-10 10 10 0 0 1 10 10m-4.35 37.58A46.05 46.05 0 0 1 168 238h-24a46.06 46.06 0 0 1-46-46v-42.29A62 62 0 0 1 42 88V40a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12H54v42a50 50 0 0 0 50 50h.67c27.2-.36 49.33-23.16 49.33-50.83V46h-18a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6v47.17c0 32.43-24.68 59.44-56 62.52V192a34 34 0 0 0 34 34h24a34.05 34.05 0 0 0 33.56-28.56 38 38 0 1 1 12.09.14M234 160a26 26 0 1 0-26 26 26 26 0 0 0 26-26" />
      </G>
    </Svg>
  );
};