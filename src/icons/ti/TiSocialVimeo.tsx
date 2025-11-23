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

export const TiSocialVimeo = (props: IconProps) => {
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
        <Path d="M18.92 8.776q-.493 2.895-2.649 5.48-2.155 2.588-3.819 3.695-1.047.495-1.786.034-.74-.464-1.169-1.325-.247-.49-1.202-3.728-.955-3.233-1.139-3.479-.124-.245-.616-.061-.494.184-.678.309a2 2 0 0 0-.308.245L5 9.209l.616-.74a13.3 13.3 0 0 1 1.724-1.54q1.048-.8 1.848-.987.556-.12.924.156.37.277.616.894.248.615.369 1.199.124.588.248 1.387.122.801.246 1.232.677 2.896 1.109 2.896.615 0 1.971-2.59.616-1.169.062-1.941-.553-.768-1.724-.029a3.6 3.6 0 0 1 1.046-2.031q1.54-1.664 3.388-1.234 1.91.371 1.477 2.895" />
      </G>
    </Svg>
  );
};