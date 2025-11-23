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

export const PiRectangleDashedLight = (props: IconProps) => {
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
        <Path d="M78 48a6 6 0 0 1-6 6H40a2 2 0 0 0-2 2v16a6 6 0 0 1-12 0V56a14 14 0 0 1 14-14h32a6 6 0 0 1 6 6M32 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m40 52H40a2 2 0 0 1-2-2v-16a6 6 0 0 0-12 0v16a14 14 0 0 0 14 14h32a6 6 0 0 0 0-12m72 0h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m80-24a6 6 0 0 0-6 6v16a2 2 0 0 1-2 2h-32a6 6 0 0 0 0 12h32a14 14 0 0 0 14-14v-16a6 6 0 0 0-6-6m0-72a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m-8-64h-32a6 6 0 0 0 0 12h32a2 2 0 0 1 2 2v16a6 6 0 0 0 12 0V56a14 14 0 0 0-14-14m-72 0h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12" />
      </G>
    </Svg>
  );
};