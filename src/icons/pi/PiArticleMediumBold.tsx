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

export const PiArticleMediumBold = (props: IconProps) => {
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
        <Path d="M56 132a12 12 0 0 1-12 12H24a12 12 0 0 1 0-24h4V68h-4a12 12 0 0 1 0-24h16a12 12 0 0 1 10 5.33l30 45 30-45A12 12 0 0 1 120 44h16a12 12 0 0 1 0 24h-4v52h4a12 12 0 0 1 0 24h-20a12 12 0 0 1-8-20.93V95.63l-18 27a12 12 0 0 1-20 0l-18-27v27.44a12 12 0 0 1 4 8.93m120-28h56a12 12 0 0 0 0-24h-56a12 12 0 0 0 0 24m56 16h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40H80a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24m0 40H80a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24" />
      </G>
    </Svg>
  );
};