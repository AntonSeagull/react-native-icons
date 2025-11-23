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

export const TfiLayoutSidebar2 = (props: IconProps) => {
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
        <Path d="M17 0v17h-4V0zM0 17h3V0H0zm11 0h1v-1h-1zm-3.429 0h.857v-1h-.857zm1.715 0h.857v-1h-.857zm-3.429 0h.857v-1h-.857zM4 17h1v-1H4zM4 3h1V2H4zm0 10h1v-1H4zm0 2h1v-1H4zm0-4h1v-1H4zm0-4h1V6H4zm0-2h1V4H4zm0 4h1V8H4zm0-8h1V0H4zm1.857 0h.857V0h-.857zm3.429 0h.857V0h-.857zM7.571 1h.857V0h-.857zM11 1h1V0h-1zm0 4h1V4h-1zm0-2h1V2h-1zm0 4h1V6h-1zm0 2h1V8h-1zm0 6h1v-1h-1zm0-2h1v-1h-1zm0-2h1v-1h-1z" />
      </G>
    </Svg>
  );
};