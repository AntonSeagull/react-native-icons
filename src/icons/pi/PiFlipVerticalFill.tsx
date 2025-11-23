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

export const PiFlipVerticalFill = (props: IconProps) => {
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
        <Path d="M56 120h160a16 16 0 0 0 6.23-30.74l-.14-.06-159.93-64A16 16 0 0 0 40 40v64a16 16 0 0 0 16 16m0-80 .15.06L216 104H56zm175.67 108.82a15.85 15.85 0 0 1-9.45 17.92l-.14.06-159.93 64A16 16 0 0 1 40 216v-64a16 16 0 0 1 16-16h160a15.85 15.85 0 0 1 15.67 12.82" />
      </G>
    </Svg>
  );
};