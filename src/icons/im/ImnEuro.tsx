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

export const ImnEuro = (props: IconProps) => {
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
        <Path d="M7.5 1a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15m0 13.5a6 6 0 1 1 0-12 6 6 0 0 1 0 12" />
        <Path d="M10.482 10.068a.5.5 0 0 0-.684.181A1.51 1.51 0 0 1 8.5 11h-2a1.5 1.5 0 0 1-1.414-1H7.5a.5.5 0 0 0 0-1H5V8h2.5a.5.5 0 0 0 0-1H5.086c.206-.582.762-1 1.414-1h2a1.51 1.51 0 0 1 1.298.751.5.5 0 1 0 .865-.503 2.51 2.51 0 0 0-2.162-1.249h-2c-1.207 0-2.217.86-2.45 2h-.55a.5.5 0 0 0 0 1h.5v1h-.5a.5.5 0 0 0 0 1h.55c.232 1.14 1.242 2 2.45 2h2a2.51 2.51 0 0 0 2.162-1.249.5.5 0 0 0-.181-.684z" />
      </G>
    </Svg>
  );
};