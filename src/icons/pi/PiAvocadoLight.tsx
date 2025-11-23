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

export const PiAvocadoLight = (props: IconProps) => {
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
        <Path d="M128 114a46 46 0 1 0 46 46 46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34 34 34 0 0 1-34 34m81.1-62.68-29.8-84.21A54 54 0 0 0 77.08 46l-29.52 83.52a86 86 0 1 0 161.54 1.8M128 234a74.05 74.05 0 0 1-69.2-100.28c0-.05 0-.09.05-.13L88.39 50a42 42 0 0 1 79.53.92s0 .08.05.13l29.82 84.28A74.06 74.06 0 0 1 128 234" />
      </G>
    </Svg>
  );
};