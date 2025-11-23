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

export const PiPopsicleBold = (props: IconProps) => {
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
        <Path d="M128 4a76.08 76.08 0 0 0-76 76v96a20 20 0 0 0 20 20h24v28a32 32 0 0 0 64 0v-28h24a20 20 0 0 0 20-20V80a76.08 76.08 0 0 0-76-76m8 220a8 8 0 0 1-16 0v-28h16Zm44-52H76V80a52 52 0 0 1 104 0Zm-60-96v68a12 12 0 0 1-24 0V76a12 12 0 0 1 24 0m40 0v68a12 12 0 0 1-24 0V76a12 12 0 0 1 24 0" />
      </G>
    </Svg>
  );
};