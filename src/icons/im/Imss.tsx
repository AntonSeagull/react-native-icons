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

export const Imss = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12.153.263a.5.5 0 0 0-.44-.263H4.288a.5.5 0 0 0-.44.263C3.294 1.295 3.001 2.5 3.001 3.75c0 1.647.506 3.2 1.424 4.374.71.907 1.601 1.508 2.576 1.753V15h-1.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-1.5V9.877c.975-.244 1.866-.846 2.576-1.753.918-1.174 1.424-2.727 1.424-4.374 0-1.249-.293-2.455-.847-3.487zM4.595 1h6.809a6.46 6.46 0 0 1 .59 3H4.003a6.46 6.46 0 0 1 .59-3z" />
      </G>
    </Svg>
  );
};