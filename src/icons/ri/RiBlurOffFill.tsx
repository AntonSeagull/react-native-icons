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

export const RiBlurOffFill = (props: IconProps) => {
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
        <Path d="M5.432 6.843 1.394 2.804 2.808 1.39l19.799 19.8-1.415 1.413-3.038-3.038A9 9 0 0 1 5.432 6.843m2.811-2.817L12 .269l6.364 6.364a9 9 0 0 1 2.05 9.564z" />
      </G>
    </Svg>
  );
};