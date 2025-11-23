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

export const SiIssuu = (props: IconProps) => {
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
        <Path d="M.996 0A1 1 0 0 0 0 .996V12c0 6.628 5.372 12 12 12s12-5.372 12-12S18.628 0 12 0zm11.17 3.582a8.333 8.333 0 0 1 8.254 8.41 8.333 8.333 0 0 1-8.41 8.252c-4.597-.045-8.296-3.81-8.254-8.41.045-4.6 3.81-8.296 8.41-8.252m-.031 2.27a6.107 6.107 0 0 0-6.155 6.046 6.11 6.11 0 0 0 6.05 6.163 6.1 6.1 0 0 0 6.154-6.047 6.107 6.107 0 0 0-6.041-6.162zm-.02 3.013a3.1 3.1 0 0 1 3.063 3.123 3.09 3.09 0 0 1-3.121 3.06l.002-.001a3.091 3.091 0 0 1 .056-6.182" />
      </G>
    </Svg>
  );
};