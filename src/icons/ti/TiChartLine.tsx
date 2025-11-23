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

export const TiChartLine = (props: IconProps) => {
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
        <Path d="M4.75 15.561a2 2 0 0 0 2.811-.313l2.789-3.486L12.8 13.6a2 2 0 0 0 2.762-.352l4-5a2 2 0 0 0-3.124-2.499l-2.789 3.486L11.2 7.4a2 2 0 0 0-2.762.35l-4 5a2 2 0 0 0 .312 2.811M5 21h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2" />
      </G>
    </Svg>
  );
};