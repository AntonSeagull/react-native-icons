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

export const TfiLayoutWidthDefaultAlt = (props: IconProps) => {
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
        <Path d="M2 16h1v1H2zm8 1h1v-1h-1zm2 0h1v-1h-1zm-8 0h1v-1H4zm2 0h1v-1H6zm2 0h1v-1H8zm6 0h1v-1h-1zm0-14h1V2h-1zm0 2h1V4h-1zm0 8h1v-1h-1zm0-6h1V6h-1zm0 2h1V8h-1zm0 6h1v-1h-1zm0-4h1v-1h-1zm0-11v1h1V0zm-2 1h1V0h-1zM6 1h1V0H6zm2 0h1V0H8zm2 0h1V0h-1zM4 1h1V0H4zM2 1h1V0H2zm0 12h1v-1H2zm0 2h1v-1H2zm0-4h1v-1H2zm0-8h1V2H2zm0 2h1V4H2zm0 2h1V6H2zm0 2h1V8H2z" />
      </G>
    </Svg>
  );
};