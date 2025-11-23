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

export const PiKanbanBold = (props: IconProps) => {
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
        <Path d="M216 44H40a12 12 0 0 0-12 12v152a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20v-44h40v12a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20V56a12 12 0 0 0-12-12m-12 64h-32V68h32ZM84 68v40H52V68Zm0 136H52v-72h32Zm24-64V68h40v72Zm64 32v-40h32v40Z" />
      </G>
    </Svg>
  );
};