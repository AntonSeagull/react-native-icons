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

export const PiCourtBasketballFill = (props: IconProps) => {
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
        <Path d="M240 92.23v71.54a4 4 0 0 1-4.41 4 40 40 0 0 1 0-79.52 4 4 0 0 1 4.41 3.98M20.41 167.76a40 40 0 0 0 0-79.52 4 4 0 0 0-4.41 4v71.54a4 4 0 0 0 4.41 3.98M116 48H32a16 16 0 0 0-16 16v4.13a4 4 0 0 0 3.8 4 56 56 0 0 1 0 111.74 4 4 0 0 0-3.8 4V192a16 16 0 0 0 16 16h84a4 4 0 0 0 4-4V52a4 4 0 0 0-4-4m108 0h-84a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h84a16 16 0 0 0 16-16v-4.13a4 4 0 0 0-3.8-4 56 56 0 0 1 0-111.74 4 4 0 0 0 3.8-4V64a16 16 0 0 0-16-16" />
      </G>
    </Svg>
  );
};