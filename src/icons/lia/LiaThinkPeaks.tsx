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

export const LiaThinkPeaks = (props: IconProps) => {
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
        <Path d="M15.506 2.44 3 24h2.313L15.51 6.42l10.119 17.379L29.574 17h-2.312l-1.637 2.82zm.02 7.99L8.813 22h2.315l4.4-7.59L24.027 29h2.315z" />
      </G>
    </Svg>
  );
};