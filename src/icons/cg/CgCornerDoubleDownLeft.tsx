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

export const CgCornerDoubleDownLeft = (props: IconProps) => {
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
        <Path fill="currentColor" d="m11.295 7.694 4.84-5.056 5.057 4.84-1.383 1.445-2.462-2.357.162 6.034a4.8 4.8 0 0 1-4.67 4.927l-5.925.16 2.294 2.246-1.4 1.43-5-4.9 4.898-5 1.429 1.4-2.377 2.427 6.017-.162a2.4 2.4 0 0 0 2.335-2.463l-.158-5.898-2.212 2.31z" />
      </G>
    </Svg>
  );
};