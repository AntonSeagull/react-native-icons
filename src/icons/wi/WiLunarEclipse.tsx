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

export const WiLunarEclipse = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 15, 15)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9.8 14.62c0-.93.23-1.8.7-2.6s1.1-1.44 1.9-1.91 1.67-.7 2.6-.7c.94 0 1.81.23 2.61.7s1.43 1.1 1.9 1.9.7 1.67.7 2.61-.23 1.81-.7 2.61-1.1 1.43-1.9 1.9-1.67.7-2.61.7-1.8-.23-2.6-.7-1.43-1.1-1.9-1.9-.7-1.67-.7-2.61m4.45-3.4c.87.11 1.6.49 2.19 1.15s.89 1.44.89 2.33c0 .83-.26 1.56-.78 2.2s-1.18 1.04-1.98 1.21c.2.02.34.04.43.04.98 0 1.81-.35 2.5-1.04s1.04-1.52 1.04-2.5c0-.96-.35-1.78-1.04-2.47a3.44 3.44 0 0 0-2.5-1.02c-.26.02-.51.05-.75.1" />
      </G>
    </Svg>
  );
};