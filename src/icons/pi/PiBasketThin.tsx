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

export const PiBasketThin = (props: IconProps) => {
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
        <Path d="M132 120v56a4 4 0 0 1-8 0v-56a4 4 0 0 1 8 0m49.2-4a4 4 0 0 0-4.38 3.58l-5.6 56a4 4 0 0 0 3.58 4.42h.41a4 4 0 0 0 4-3.6l5.6-56a4 4 0 0 0-3.61-4.4m-106.4 0a4 4 0 0 0-3.58 4.38l5.6 56a4 4 0 0 0 4 3.6h.41a4 4 0 0 0 3.58-4.38l-5.6-56a4 4 0 0 0-4.41-3.6M236 88.53l-15.11 113.06A12 12 0 0 1 209 212H47a12 12 0 0 1-11.89-10.41L20 88.53a4 4 0 0 1 1-3.16A4 4 0 0 1 24 84h46.18L125 21.37a4 4 0 0 1 6 0L185.82 84H232a4 4 0 0 1 3 1.37 4 4 0 0 1 1 3.16M80.82 84h94.36L128 30.07Zm146.61 8H28.57L43 200.53a4 4 0 0 0 4 3.47h162a4 4 0 0 0 4-3.47Z" />
      </G>
    </Svg>
  );
};