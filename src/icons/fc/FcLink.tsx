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

export const FcLink = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M38 13h-3c-5.5 0-10 4.5-10 10s4.5 10 10 10h3c5.5 0 10-4.5 10-10s-4.5-10-10-10m0 16h-3c-3.3 0-6-2.7-6-6s2.7-6 6-6h3c3.3 0 6 2.7 6 6s-2.7 6-6 6M13 13h-3C4.5 13 0 17.5 0 23s4.5 10 10 10h3c5.5 0 10-4.5 10-10s-4.5-10-10-10m0 16h-3c-3.3 0-6-2.7-6-6s2.7-6 6-6h3c3.3 0 6 2.7 6 6s-2.7 6-6 6" />
        <Path fill="#42A5F5" d="M33 21H15c-1.1 0-2 .9-2 2s.9 2 2 2h18c1.1 0 2-.9 2-2s-.9-2-2-2" />
      </G>
    </Svg>
  );
};