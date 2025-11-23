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

export const LiaDiagnosesSolid = (props: IconProps) => {
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
        <Path d="M16 5c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4m0 8h-1.38a5 5 0 0 0-4.33 2.52c.71.08 1.33.46 1.73 1.01.52-.94 1.51-1.53 2.6-1.53h2.76c.44 0 .85.09 1.23.26.21-.69.71-1.24 1.35-1.53a4.9 4.9 0 0 0-2.58-.73zm0-6c1.12 0 2 .88 2 2s-.88 2-2 2-2-.88-2-2 .88-2 2-2m5 8a1 1 0 0 0 0 2 1 1 0 0 0 0-2m-11 2a1 1 0 0 0 0 2 1 1 0 0 0 0-2m12.73.81c-.45.43-1.06.69-1.73.69-.05 0-.11 0-.16-.01l1.25 2.92.19.47.53.09 5 1 .38-1.94-4.47-.91zM15 18a1 1 0 0 0 0 2 1 1 0 0 0 0-2m-6.63 1.9-.09.22-4.47.91.38 1.94 5-1 .53-.09.19-.47.4-.93a2.514 2.514 0 0 1-1.941-.58M18 21a1 1 0 0 0 0 2 1 1 0 0 0 0-2M2 25v2h28v-2z" />
      </G>
    </Svg>
  );
};