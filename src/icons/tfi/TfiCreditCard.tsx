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

export const TfiCreditCard = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15.5 2h-14C.673 2 0 2.673 0 3.5v10c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5m.5 11.5a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5V8h15zM1 5V3.5a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5V5z" />
      </G>
    </Svg>
  );
};