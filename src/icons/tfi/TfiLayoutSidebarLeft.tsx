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

export const TfiLayoutSidebarLeft = (props: IconProps) => {
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
        <Path d="M0 0h5v17H0zm7 17h1v-1H7zm7.222 0h.889v-1h-.889zm-1.778 0h.889v-1h-.889zm-3.555 0h.889v-1h-.889zm1.778 0h.889v-1h-.889zM16 17h1v-1h-1zm0-14h1V2h-1zm0 12h1v-1h-1zm0-8h1V6h-1zm0-2h1V4h-1zm0 4h1V8h-1zm0 2h1v-1h-1zm0 2h1v-1h-1zm0-13v1h1V0zm-1.777 1h.889V0h-.889zm-1.778 0h.889V0h-.889zm-1.778 0h.889V0h-.889zM8.889 1h.889V0h-.889zM7 1h1V0H7zm0 14h1v-1H7zm0-2h1v-1H7zm0-6h1V6H7zm0 4h1v-1H7zm0-6h1V4H7zm0-2h1V2H7zm0 6h1V8H7z" />
      </G>
    </Svg>
  );
};