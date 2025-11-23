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

export const TfiReceipt = (props: IconProps) => {
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
        <Path d="M2 0v16.902l2.028-2.481 1.503 1.88 1.501-1.875 1.499 1.875 1.5-1.875 1.5 1.875 1.499-1.875 1.97 2.46V0zm12 14.036-.97-1.211-1.499 1.875-1.5-1.875-1.5 1.875-1.499-1.875L5.531 14.7l-1.495-1.87L3 14.098V1h11zM10.997 4h-6V3h6zm-2 4h-4V7h4zm2.981-2h-7V5h7zM5 10h7v1H5z" />
      </G>
    </Svg>
  );
};