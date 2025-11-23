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

export const LiaWpexplorer = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13S23.2 3 16 3m0 2c6.1 0 11 4.9 11 11s-4.9 11-11 11S5 22.1 5 16 9.9 5 16 5m-4.8 5-1.8 4.3 4.3 1.8 1.8-4.3zm4.8 2.6L14.6 16l3.3 1.4.016-.035.084.035 1.5-3.4zm4 2.1-1.1 2.7 2.7 1.1 1.2-2.7zm-5.7 1.9-.3.6 1.1.5-2.5 5.3h.7l2.4-4.9 2.5 4.9h.7l-2.3-4.6.8.3.3-.7z" />
      </G>
    </Svg>
  );
};