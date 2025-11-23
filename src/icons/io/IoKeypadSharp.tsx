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

export const IoKeypadSharp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Rect width={96} height={96} x={80} y={16} rx={8} ry={8} />
        <Rect width={96} height={96} x={208} y={16} rx={8} ry={8} />
        <Rect width={96} height={96} x={336} y={16} rx={8} ry={8} />
        <Rect width={96} height={96} x={80} y={144} rx={8} ry={8} />
        <Rect width={96} height={96} x={208} y={144} rx={8} ry={8} />
        <Rect width={96} height={96} x={336} y={144} rx={8} ry={8} />
        <Rect width={96} height={96} x={80} y={272} rx={8} ry={8} />
        <Rect width={96} height={96} x={208} y={272} rx={8} ry={8} />
        <Rect width={96} height={96} x={208} y={400} rx={8} ry={8} />
        <Rect width={96} height={96} x={336} y={272} rx={8} ry={8} />
      </G>
    </Svg>
  );
};