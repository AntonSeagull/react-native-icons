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

export const PiTrademarkLight = (props: IconProps) => {
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
        <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m-18-114a6 6 0 0 1-6 6H94v42a6 6 0 0 1-12 0v-42H72a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m80 0v48a6 6 0 0 1-12 0v-32l-17.48 20a6 6 0 0 1-9 0L134 120v32a6 6 0 0 1-12 0v-48a6 6 0 0 1 10.52-4L156 126.89l23.48-26.84A6 6 0 0 1 190 104" />
      </G>
    </Svg>
  );
};