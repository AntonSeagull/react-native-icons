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

export const TbFlareFilled = (props: IconProps) => {
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
        <Path d="M11.106 2.553a1 1 0 0 1 1.788 0l2.851 5.701 5.702 2.852a1 1 0 0 1 .11 1.725l-.11.063-5.702 2.851-2.85 5.702a1 1 0 0 1-1.726.11l-.063-.11-2.852-5.702-5.701-2.85a1 1 0 0 1-.11-1.726l.11-.063 5.701-2.852z" />
      </G>
    </Svg>
  );
};