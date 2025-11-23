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

export const LuVectorSquare = (props: IconProps) => {
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
        <Path d="M19.5 7a24 24 0 0 1 0 10M4.5 7a24 24 0 0 0 0 10M7 19.5a24 24 0 0 0 10 0M7 4.5a24 24 0 0 1 10 0" />
        <Rect width={5} height={5} x={17} y={17} rx={1} />
        <Rect width={5} height={5} x={17} y={2} rx={1} />
        <Rect width={5} height={5} x={2} y={17} rx={1} />
        <Rect width={5} height={5} x={2} y={2} rx={1} />
      </G>
    </Svg>
  );
};