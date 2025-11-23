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

export const PiAirTrafficControlLight = (props: IconProps) => {
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
        <Path d="M227.47 72A14 14 0 0 0 216 66h-82V30h18a6 6 0 0 0 0-12h-48a6 6 0 0 0 0 12h18v36H40a14 14 0 0 0-13.16 18.78l26.19 72A14 14 0 0 0 66.18 166H98v66a6 6 0 0 0 12 0v-66h36v66a6 6 0 0 0 12 0v-66h31.82a14 14 0 0 0 13.18-9.22l26.19-72A14 14 0 0 0 227.47 72M109 154 95.19 78h65.62L147 154Zm-44.7-1.32-26.18-72a2 2 0 0 1 .24-1.83A1.94 1.94 0 0 1 40 78h43l13.82 76H66.18a2 2 0 0 1-1.88-1.32m153.58-72-26.18 72a2 2 0 0 1-1.88 1.32h-30.63L173 78h43a1.94 1.94 0 0 1 1.64.85 2 2 0 0 1 .24 1.83" />
      </G>
    </Svg>
  );
};