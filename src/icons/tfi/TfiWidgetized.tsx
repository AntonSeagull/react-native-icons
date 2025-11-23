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

export const TfiWidgetized = (props: IconProps) => {
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
        <Path d="M2 0h1v1H2zm2 1h1V0H4zm2 0h1V0H6zm2 0h1V0H8zm2 0h1V0h-1zm2 0h1V0h-1zm2 0h1V0h-1zM2 9h1V8H2zm2 0h1V8H4zm2 0h1V8H6zm4 0h1V8h-1zm2 0h1V8h-1zm2 0h1V8h-1zM2 17h1v-1H2zm2 0h1v-1H4zm2 0h1v-1H6zm2 0h1v-1H8zm2 0h1v-1h-1zm2 0h1v-1h-1zm2 0h1v-1h-1zm2-17v1h1V0zm0 3h1V2h-1zm0 2h1V4h-1zm0 2h1V6h-1zm0 2h1V8h-1zm0 2h1v-1h-1zm0 2h1v-1h-1zm0 2h1v-1h-1zM8 3h1V2H8zm0 2h1V4H8zm0 2h1V6H8zm0 2h1V8H8zm0 2h1v-1H8zm0 2h1v-1H8zm0 2h1v-1H8zm8 2h1v-1h-1zM0 1h1V0H0zm0 2h1V2H0zm0 2h1V4H0zm0 2h1V6H0zm0 2h1V8H0zm0 2h1v-1H0zm0 2h1v-1H0zm0 2h1v-1H0zm0 2h1v-1H0z" />
      </G>
    </Svg>
  );
};