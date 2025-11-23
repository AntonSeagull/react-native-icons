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

export const SiBukalapak = (props: IconProps) => {
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
        <Path d="M10.976 23.845a3.158 3.158 0 1 1-1.95-6.008 3.158 3.158 0 0 1 1.95 6.008m6.554-2.883c4.047-1.315 7.315-5.981 5.689-10.984s-7.012-6.856-11.058-5.541a1.89 1.89 0 0 0-1.252 2.249l.414 1.682a1.89 1.89 0 0 0 2.42 1.348l.162-.053c1.861-.606 3.592.504 4.071 2.019.505 1.507-.244 3.422-2.106 4.027l-.162.054a1.89 1.89 0 0 0-1.166 2.512l.653 1.604a1.89 1.89 0 0 0 2.335 1.083m-6.962-7.982L7.841 1.752A2.3 2.3 0 0 0 4.897.113l-2.952.959A2.3 2.3 0 0 0 .526 4.128L4.92 14.815a2.3 2.3 0 0 0 2.841 1.318l1.285-.417a2.3 2.3 0 0 0 1.522-2.736" />
      </G>
    </Svg>
  );
};