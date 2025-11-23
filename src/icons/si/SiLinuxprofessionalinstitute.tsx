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

export const SiLinuxprofessionalinstitute = (props: IconProps) => {
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
        <Path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 20.987a8.987 8.987 0 1 1 0-17.973 8.987 8.987 0 1 1 0 17.973m5.104-3.003.8-2.998H10.74l2.765-10.491h-2.998L6.912 17.984Zm.29-10.494c0 .822-.67 1.494-1.494 1.494a1.493 1.493 0 0 1 0-2.985c.822 0 1.494.669 1.494 1.49" />
      </G>
    </Svg>
  );
};