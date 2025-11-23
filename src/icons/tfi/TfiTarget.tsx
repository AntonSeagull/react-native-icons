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

export const TfiTarget = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M17.02 8h-2.045a6.504 6.504 0 0 0-6.004-5.977V-.039h-1v2.065A6.505 6.505 0 0 0 2.025 8H-.02v1h2.045a6.505 6.505 0 0 0 5.945 5.974V17h1v-2.023A6.5 6.5 0 0 0 14.974 9h2.045V8zm-8.049 5.977V12h-1v1.974A5.51 5.51 0 0 1 3.025 9H4.98V8H3.025a5.51 5.51 0 0 1 4.946-4.974v1.935h1V3.023A5.51 5.51 0 0 1 13.975 8H12.02v1h1.955a5.51 5.51 0 0 1-5.004 4.977" />
      </G>
    </Svg>
  );
};