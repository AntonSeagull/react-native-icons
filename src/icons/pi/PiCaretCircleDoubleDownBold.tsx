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

export const PiCaretCircleDoubleDownBold = (props: IconProps) => {
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
        <Path d="M204.4 51.6a108 108 0 1 0 0 152.8 108.16 108.16 0 0 0 0-152.8m-17 135.82a84 84 0 1 1 0-118.84 84.12 84.12 0 0 1 .02 118.84ZM168.5 79.49a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L128 103l23.53-23.53a12 12 0 0 1 16.97.02m0 56a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L128 159l23.53-23.52a12 12 0 0 1 16.97.04Z" />
      </G>
    </Svg>
  );
};