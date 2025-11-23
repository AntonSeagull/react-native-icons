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

export const PiCassetteTapeBold = (props: IconProps) => {
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
        <Path d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144h-37l-12.6-16.8a8 8 0 0 0-6.4-3.2H92a8 8 0 0 0-6.4 3.2L73 188H36V68h184ZM82 152h92a34 34 0 0 0 0-68H82a34 34 0 0 0 0 68m0-44a10 10 0 1 1-10 10 10 10 0 0 1 10-10m102 10a10 10 0 1 1-10-10 10 10 0 0 1 10 10m-42.5 10h-27a34.1 34.1 0 0 0 0-20h27a34.1 34.1 0 0 0 0 20" />
      </G>
    </Svg>
  );
};