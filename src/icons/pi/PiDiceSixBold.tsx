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

export const PiDiceSixBold = (props: IconProps) => {
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
        <Path d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM112 84a16 16 0 1 1-16-16 16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16m-64 44a16 16 0 1 1-16-16 16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16m-64 44a16 16 0 1 1-16-16 16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16" />
      </G>
    </Svg>
  );
};