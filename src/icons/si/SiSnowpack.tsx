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

export const SiSnowpack = (props: IconProps) => {
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
        <Path d="m23.81 19.751-10.8-16.8a1.2 1.2 0 0 0-2.02 0l-10.8 16.8a1.2 1.2 0 0 0-.043 1.224A1.2 1.2 0 0 0 1.2 21.6h21.6a1.2 1.2 0 0 0 1.053-.625 1.2 1.2 0 0 0-.044-1.224M12 5.82l3.202 4.981H12l-2.4 2.4-1.427-1.427z" />
      </G>
    </Svg>
  );
};