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

export const PiAngleBold = (props: IconProps) => {
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
        <Path d="M252 200a12 12 0 0 1-12 12H72a12 12 0 0 1-12-12V84H32a12 12 0 0 1 0-24h28V32a12 12 0 0 1 24 0v156h156a12 12 0 0 1 12 12M111 84.29a84 84 0 0 1 76.7 76.7 12 12 0 0 0 11.95 11h1a12 12 0 0 0 11-13A108 108 0 0 0 113 60.37a12 12 0 1 0-2 23.92" />
      </G>
    </Svg>
  );
};