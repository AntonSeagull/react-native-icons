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

export const Imachment = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10.404 5.11 9.389 4.096 4.314 9.17a2.152 2.152 0 1 0 3.045 3.044l6.09-6.089a3.588 3.588 0 0 0-5.075-5.074L1.98 7.444l-.014.013c-1.955 1.955-1.955 5.123 0 7.077s5.123 1.954 7.078 0l.013-.014.001.001 4.365-4.364-1.015-1.014-4.365 4.363-.013.013c-1.392 1.392-3.656 1.392-5.048 0a3.57 3.57 0 0 1 .014-5.06l-.001-.001L9.39 2.065c.839-.84 2.205-.84 3.045 0s.839 2.205 0 3.044l-6.09 6.089a.718.718 0 0 1-1.015-1.014z" />
      </G>
    </Svg>
  );
};