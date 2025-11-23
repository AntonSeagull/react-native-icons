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

export const PiCaretCircleDoubleLeftFill = (props: IconProps) => {
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
        <Path d="M201.57 54.42a104 104 0 1 0 0 147.15 104.17 104.17 0 0 0 0-147.15m-83.92 99.93a8 8 0 1 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 1 1 11.32 11.32L91.29 128Zm56 0a8 8 0 1 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 1 1 11.32 11.32L147.32 128Z" />
      </G>
    </Svg>
  );
};