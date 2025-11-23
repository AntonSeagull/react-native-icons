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

export const PiCodeBlockThin = (props: IconProps) => {
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
        <Path d="m61.17 98.83-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66L37.66 64l29.17 29.17a4 4 0 0 1-5.66 5.66m40 0a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0 0-5.66l-32-32a4 4 0 0 0-5.66 5.66L130.34 64l-29.17 29.17a4 4 0 0 0 0 5.66M200 44h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4v144a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-64a4 4 0 0 0-8 0v64a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12" />
      </G>
    </Svg>
  );
};