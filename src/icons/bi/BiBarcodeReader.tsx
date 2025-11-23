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

export const BiBarcodeReader = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5 7h2v10H5zm9 0h1v10h-1zm-4 0h3v10h-3zM8 7h1v10H8zm8 0h3v10h-3z" />
        <Path d="M4 5h4V3H4c-1.103 0-2 .897-2 2v4h2zm0 16h4v-2H4v-4H2v4c0 1.103.897 2 2 2M20 3h-4v2h4v4h2V5c0-1.103-.897-2-2-2m0 16h-4v2h4c1.103 0 2-.897 2-2v-4h-2z" />
      </G>
    </Svg>
  );
};