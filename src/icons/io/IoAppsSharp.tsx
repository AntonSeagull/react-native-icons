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

export const IoAppsSharp = (props: IconProps) => {
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
        <Rect width={112} height={112} x={48} y={48} rx={8} ry={8} />
        <Rect width={112} height={112} x={200} y={48} rx={8} ry={8} />
        <Rect width={112} height={112} x={352} y={48} rx={8} ry={8} />
        <Rect width={112} height={112} x={48} y={200} rx={8} ry={8} />
        <Rect width={112} height={112} x={200} y={200} rx={8} ry={8} />
        <Rect width={112} height={112} x={352} y={200} rx={8} ry={8} />
        <Rect width={112} height={112} x={48} y={352} rx={8} ry={8} />
        <Rect width={112} height={112} x={200} y={352} rx={8} ry={8} />
        <Rect width={112} height={112} x={352} y={352} rx={8} ry={8} />
      </G>
    </Svg>
  );
};