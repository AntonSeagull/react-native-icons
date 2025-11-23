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

export const TfiLayoutSidebarRight = (props: IconProps) => {
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
        <Path d="M17 0v17h-5V0zM9 17h1v-1H9zm-1.777 0h.889v-1h-.889zm-5.334 0h.889v-1h-.889zm1.778 0h.889v-1h-.889zm1.778 0h.889v-1h-.889zM0 17h1v-1H0zm0-8h1V8H0zm0-6h1V2H0zm0 8h1v-1H0zm0-4h1V6H0zm0 6h1v-1H0zm0 2h1v-1H0zM0 5h1V4H0zm0-4h1V0H0zm8.111-1h-.889v1h.889zM6.333 0h-.889v1h.889zM2.777 0h-.888v1h.889V0zm1.778 0h-.888v1h.889V0zM9 1h1V0H9zm0 14h1v-1H9zm0-2h1v-1H9zm0-4h1V8H9zm0 2h1v-1H9zm0-6h1V4H9zm0 2h1V6H9zm0-4h1V2H9z" />
      </G>
    </Svg>
  );
};