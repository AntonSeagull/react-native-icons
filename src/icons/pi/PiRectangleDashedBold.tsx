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

export const PiRectangleDashedBold = (props: IconProps) => {
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
        <Path d="M84 48a12 12 0 0 1-12 12H44v12a12 12 0 0 1-24 0V56a20 20 0 0 1 20-20h32a12 12 0 0 1 12 12M32 156a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12m40 40H44v-12a12 12 0 0 0-24 0v16a20 20 0 0 0 20 20h32a12 12 0 0 0 0-24m72 0h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m80-24a12 12 0 0 0-12 12v12h-28a12 12 0 0 0 0 24h32a20 20 0 0 0 20-20v-16a12 12 0 0 0-12-12m0-72a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m-8-64h-32a12 12 0 0 0 0 24h28v12a12 12 0 0 0 24 0V56a20 20 0 0 0-20-20m-72 0h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24" />
      </G>
    </Svg>
  );
};