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

export const PiArrowUDownRightBold = (props: IconProps) => {
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
        <Path d="m232.49 176.49-48 48a12 12 0 0 1-17-17L195 180H88a68 68 0 0 1 0-136h88a12 12 0 0 1 0 24H88a44 44 0 0 0 0 88h107l-27.52-27.51a12 12 0 1 1 17-17l48 48a12 12 0 0 1 .01 17" />
      </G>
    </Svg>
  );
};