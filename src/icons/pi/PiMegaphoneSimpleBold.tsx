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

export const PiMegaphoneSimpleBold = (props: IconProps) => {
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
        <Path d="m229.7 82.84-175.94-54-.16-.05A20 20 0 0 0 28 48v144a20 20 0 0 0 19.94 20 20.4 20.4 0 0 0 5.66-.81h.16l78.24-24V196a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-30.94l25.7-7.89A20.1 20.1 0 0 0 244 138v-36a20.1 20.1 0 0 0-14.3-19.16M52 186.58V53.43L132 78v84ZM180 192h-24v-12.22l24-7.36Zm40-56.95-64 19.63V85.33L220 105Z" />
      </G>
    </Svg>
  );
};