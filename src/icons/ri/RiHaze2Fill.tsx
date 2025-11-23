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

export const RiHaze2Fill = (props: IconProps) => {
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
        <Path d="M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m7.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 7a5 5 0 0 1 0 10q-2.765 0-5-3.121Q9.765 16.999 7 17A5 5 0 0 1 7 7q2.765 0 5 3.121Q14.235 7.001 17 7m-5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M4.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
      </G>
    </Svg>
  );
};