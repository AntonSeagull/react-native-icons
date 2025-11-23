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

export const PiGoogleCardboardLogoBold = (props: IconProps) => {
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
        <Path d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h64a12 12 0 0 0 8.49-3.51L128 185l23.51 23.52A12 12 0 0 0 160 212h64a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144h-55l-22.83-22.83a20 20 0 0 0-28.28 0L91 188H36V68h184ZM82 160a34 34 0 1 0-34-34 34 34 0 0 0 34 34m0-44a10 10 0 1 1-10 10 10 10 0 0 1 10-10m92 44a34 34 0 1 0-34-34 34 34 0 0 0 34 34m0-44a10 10 0 1 1-10 10 10 10 0 0 1 10-10" />
      </G>
    </Svg>
  );
};