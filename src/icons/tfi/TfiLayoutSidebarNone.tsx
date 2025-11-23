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

export const TfiLayoutSidebarNone = (props: IconProps) => {
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
        <Path d="M0 16h1v1H0zm14 1h1v-1h-1zm-2 0h1v-1h-1zm-2 0h1v-1h-1zm-2 0h1v-1H8zm-2 0h1v-1H6zm-4 0h1v-1H2zm2 0h1v-1H4zm12 0h1v-1h-1zm0-6h1v-1h-1zm0 2h1v-1h-1zm0-8h1V4h-1zm0 4h1V8h-1zm0-2h1V6h-1zm0-4h1V2h-1zm0 12h1v-1h-1zm0-15v1h1V0zM4 1h1V0H4zM2 1h1V0H2zm10 0h1V0h-1zm-2 0h1V0h-1zM6 1h1V0H6zm8 0h1V0h-1zM8 1h1V0H8zM0 1h1V0H0zm0 12h1v-1H0zm0 2h1v-1H0zm0-4h1v-1H0zm0-6h1V4H0zm0 4h1V8H0zm0-6h1V2H0zm0 4h1V6H0z" />
      </G>
    </Svg>
  );
};