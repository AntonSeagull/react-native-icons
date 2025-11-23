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

export const PiPaperPlaneRightLight = (props: IconProps) => {
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
        <Path d="m230.88 115.69-168-95.88a14 14 0 0 0-20 16.87L73.66 128l-30.85 91.33A14 14 0 0 0 56 238a14.15 14.15 0 0 0 6.93-1.83l167.91-96.07a14 14 0 0 0 0-24.41Zm-5.95 14L57 225.73a2 2 0 0 1-2.86-2.42.4.4 0 0 0 0-.1L84.3 134H144a6 6 0 0 0 0-12H84.3L54.17 32.8a.3.3 0 0 0 0-.1 1.87 1.87 0 0 1 .6-2.2 1.85 1.85 0 0 1 2.23-.25l168 95.89a1.93 1.93 0 0 1 1 1.74 2 2 0 0 1-1.07 1.78Z" />
      </G>
    </Svg>
  );
};