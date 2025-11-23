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

export const PiFlagBannerThin = (props: IconProps) => {
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
        <Path d="M235.38 53.86A4 4 0 0 0 232 52H40a4 4 0 0 0-2.83 6.83L82.34 104l-45.17 45.17A4 4 0 0 0 40 156h140l-31.56 66.28a4 4 0 0 0 1.89 5.33 3.9 3.9 0 0 0 1.67.39 4 4 0 0 0 3.61-2.28l80-168a4 4 0 0 0-.23-3.86M183.76 148H49.66l41.17-41.17a4 4 0 0 0 0-5.66L49.66 60h176Z" />
      </G>
    </Svg>
  );
};