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

export const PiHeartBreakBold = (props: IconProps) => {
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
        <Path d="M178 36a65.6 65.6 0 0 0-46.67 19.33L128 58.66l-3.33-3.33A66 66 0 0 0 12 102c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 232.14 244 174.34 244 102a66.08 66.08 0 0 0-66-66m-5.49 142.36a328.7 328.7 0 0 1-44.51 31.8 328.7 328.7 0 0 1-44.51-31.8C61.82 159.77 36 131.42 36 102a42 42 0 0 1 71.7-29.7l3.3 3.33-7.52 7.52a12 12 0 0 0 0 17l21.7 21.7-13.7 13.69a12 12 0 1 0 17 17l22.18-22.19a12 12 0 0 0 0-17L129 91.63l19.3-19.33A42 42 0 0 1 220 102c0 29.42-25.82 57.77-47.49 76.36" />
      </G>
    </Svg>
  );
};