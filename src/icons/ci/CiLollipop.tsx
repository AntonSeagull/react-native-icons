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

export const CiLollipop = (props: IconProps) => {
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
        <Path d="M18 6.565h-.19a6 6 0 0 0-11.62 0H6a1.5 1.5 0 1 0 0 3h.19a5.99 5.99 0 0 0 5.31 4.48v7.39a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5v-7.39a6.01 6.01 0 0 0 5.31-4.48H18a1.5 1.5 0 1 0 0-3m-6-3.5a4.99 4.99 0 0 1 4.77 3.5H7.23a4.99 4.99 0 0 1 4.77-3.5m0 10a4.99 4.99 0 0 1-4.77-3.5h9.54a4.99 4.99 0 0 1-4.77 3.5m6-4.5H6a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5.51.51 0 0 1-.5.5" />
      </G>
    </Svg>
  );
};