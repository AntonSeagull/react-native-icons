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

export const PiGolfBold = (props: IconProps) => {
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
        <Path d="M180 100a16 16 0 1 1-16-16 16 16 0 0 1 16 16m-48 16a16 16 0 1 0 16 16 16 16 0 0 0-16-16m88-20a92 92 0 1 1-92-92 92.1 92.1 0 0 1 92 92m-24 0a68 68 0 1 0-68 68 68.07 68.07 0 0 0 68-68m-32 101.86a108.6 108.6 0 0 1-72 0 12 12 0 0 0-8 22.63 131.8 131.8 0 0 0 32 7V244a12 12 0 0 0 24 0v-16.54a131.8 131.8 0 0 0 32-7 12 12 0 0 0-8-22.63Z" />
      </G>
    </Svg>
  );
};