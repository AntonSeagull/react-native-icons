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

export const PiDevToLogoThin = (props: IconProps) => {
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
        <Path d="M232 60H24a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h208a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h208a4 4 0 0 1 4 4Zm-112-84v24h12a4 4 0 0 1 0 8h-12v24h20a4 4 0 0 1 0 8h-24a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h24a4 4 0 0 1 0 8Zm87.85-2.92-18 64a4 4 0 0 1-7.7 0l-18-64a4 4 0 1 1 7.7-2.16L190 145.23l14.15-50.31a4 4 0 0 1 7.7 2.16M64 92h-8a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h8a28 28 0 0 0 28-28v-16a28 28 0 0 0-28-28m20 44a20 20 0 0 1-20 20h-4v-56h4a20 20 0 0 1 20 20Z" />
      </G>
    </Svg>
  );
};