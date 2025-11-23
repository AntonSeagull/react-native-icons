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

export const PiCurrencyRubFill = (props: IconProps) => {
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
        <Path d="M168 104a24 24 0 0 1-24 24h-32V80h32a24 24 0 0 1 24 24m64 24A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-48-24a40 40 0 0 0-40-40h-40a8 8 0 0 0-8 8v56h-8a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16a8 8 0 0 0 16 0v-16h40a8 8 0 0 0 0-16h-40v-16h32a40 40 0 0 0 40-40" />
      </G>
    </Svg>
  );
};