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

export const PiAvocadoThin = (props: IconProps) => {
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
        <Path d="M128 116a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36 36 36 0 0 1-36 36m79.22-64-29.79-84.2A52 52 0 0 0 79 46.66l-29.55 83.51A84 84 0 1 0 207.22 132M128 236a76.06 76.06 0 0 1-71-103.08l29.5-83.59a44 44 0 0 1 83.35 1.05l29.82 84.28A76 76 0 0 1 128 236" />
      </G>
    </Svg>
  );
};