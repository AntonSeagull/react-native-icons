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

export const PiKanbanLight = (props: IconProps) => {
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
        <Path d="M216 50H40a6 6 0 0 0-6 6v152a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14v-50h52v18a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6m-6 64h-44V62h44ZM90 62v52H46V62Zm0 146a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-82h44Zm12-62V62h52v84Zm106 32h-40a2 2 0 0 1-2-2v-50h44v50a2 2 0 0 1-2 2" />
      </G>
    </Svg>
  );
};