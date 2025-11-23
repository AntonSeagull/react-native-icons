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

export const TfiViewGrid = (props: IconProps) => {
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
        <Path d="M0 7h7V0H0zm1-6h5v5H1zm9-1v7h7V0zm6 6h-5V1h5zM0 17h7v-7H0zm1-6h5v5H1zm9 6h7v-7h-7zm1-6h5v5h-5z" />
      </G>
    </Svg>
  );
};