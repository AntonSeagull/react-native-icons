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

export const SiVodafone = (props: IconProps) => {
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
        <Path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m4.25 1.12c.32 0 .65.03.86.1-2.17.45-3.9 2.47-3.89 4.78 0 .05 0 .11.01.17 3.64.89 5.27 3.08 5.27 6.11.04 3.03-2.36 6.36-6.41 6.37-3.27.01-6.68-2.79-6.7-7.28C5.38 8.4 7 5.54 9.04 3.85c2-1.66 4.73-2.72 7.21-2.73" />
      </G>
    </Svg>
  );
};