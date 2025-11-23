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

export const PiCaretDoubleRightLight = (props: IconProps) => {
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
        <Path d="m140.24 132.24-80 80a6 6 0 0 1-8.48-8.48L127.51 128 51.76 52.24a6 6 0 0 1 8.48-8.48l80 80a6 6 0 0 1 0 8.48m80-8.48-80-80a6 6 0 0 0-8.48 8.48L207.51 128l-75.75 75.76a6 6 0 1 0 8.48 8.48l80-80a6 6 0 0 0 0-8.48" />
      </G>
    </Svg>
  );
};