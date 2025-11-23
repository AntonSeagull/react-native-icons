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

export const SiTestrail = (props: IconProps) => {
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
        <Path d="M7.27 23.896 4.5 21.124a.35.35 0 0 1 0-.5l2.772-2.77a.35.35 0 0 1 .5 0l2.772 2.772a.35.35 0 0 1 0 .5l-2.772 2.77a.35.35 0 0 1-.5 0zm4.48-4.48-2.772-2.772a.35.35 0 0 1 0-.498l2.772-2.772a.35.35 0 0 1 .5 0l2.77 2.772a.35.35 0 0 1 0 .5l-2.77 2.77a.35.35 0 0 1-.499 0zm4.48-4.48-2.77-2.772a.35.35 0 0 1 0-.498l2.771-2.772a.35.35 0 0 1 .5 0l2.77 2.772a.35.35 0 0 1 0 .498l-2.772 2.772a.35.35 0 0 1-.5 0h.002zm-8.876.084-2.772-2.77a.35.35 0 0 1 0-.499l2.772-2.773a.35.35 0 0 1 .5 0l2.772 2.772a.35.35 0 0 1 0 .498l-2.772 2.774a.35.35 0 0 1-.5 0zm4.48-4.48L9.062 7.77a.35.35 0 0 1 0-.5l2.772-2.772a.35.35 0 0 1 .5 0l2.77 2.772a.35.35 0 0 1 0 .498l-2.77 2.772a.35.35 0 0 1-.499 0v-.002.001zM7.44 6.15 4.666 3.37a.35.35 0 0 1 0-.5L7.44.104a.35.35 0 0 1 .5 0l2.772 2.772a.35.35 0 0 1 0 .5L7.938 6.142a.35.35 0 0 1-.5 0l.002.006z" />
      </G>
    </Svg>
  );
};