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

export const PiCloudSnowThin = (props: IconProps) => {
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
        <Path d="M84 196a8 8 0 1 1-8-8 8 8 0 0 1 8 8m32 8a8 8 0 1 0 8 8 8 8 0 0 0-8-8m48-16a8 8 0 1 0 8 8 8 8 0 0 0-8-8m-96 40a8 8 0 1 0 8 8 8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8m72-136a72.08 72.08 0 0 1-72 72H76a48 48 0 1 1 11.51-94.61A72.08 72.08 0 0 1 228 92m-8 0a64.06 64.06 0 0 0-128-3.77 4 4 0 0 1-8-.46 71.6 71.6 0 0 1 1.42-10.65A40 40 0 1 0 76 156h80a64.07 64.07 0 0 0 64-64" />
      </G>
    </Svg>
  );
};