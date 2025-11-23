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

export const PiRobotBold = (props: IconProps) => {
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
        <Path d="M72 104a16 16 0 1 1 16 16 16 16 0 0 1-16-16m96 16a16 16 0 1 0-16-16 16 16 0 0 0 16 16m68-40v112a36 36 0 0 1-36 36H56a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h60V16a12 12 0 0 1 24 0v28h60a36 36 0 0 1 36 36m-24 0a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12Zm-12 82a30 30 0 0 1-30 30H86a30 30 0 0 1 0-60h84a30 30 0 0 1 30 30m-80-6v12h16v-12Zm-34 12h10v-12H86a6 6 0 0 0 0 12m90-6a6 6 0 0 0-6-6h-10v12h10a6 6 0 0 0 6-6" />
      </G>
    </Svg>
  );
};