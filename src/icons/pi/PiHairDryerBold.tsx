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

export const PiHairDryerBold = (props: IconProps) => {
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
        <Path d="M200 88a32 32 0 1 0-32 32 32 32 0 0 0 32-32m-32 8a8 8 0 1 1 8-8 8 8 0 0 1-8 8m13.06 112.28 31.25-68.76A68 68 0 0 0 168 20a12 12 0 0 0-2 .16L28.71 43.05A19.94 19.94 0 0 0 12 62.78v50.44A19.94 19.94 0 0 0 28.71 133L124 148.83V200a20 20 0 0 0 16.69 19.7A44.06 44.06 0 0 0 184 256h16a12 12 0 0 0 0-24h-16a20 20 0 0 1-18.41-12.19 20.09 20.09 0 0 0 15.47-11.53M36 66.17 168.93 44a44 44 0 0 1 0 88L36 109.83Zm130 89.67a12 12 0 0 0 2 .16 68 68 0 0 0 10.85-.88L160.27 196H148v-43.17Z" />
      </G>
    </Svg>
  );
};