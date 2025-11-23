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

export const PiFileIniLight = (props: IconProps) => {
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
        <Path d="M46 152v56a6 6 0 0 1-12 0v-56a6 6 0 0 1 12 0m74-6a6 6 0 0 0-6 6v37.28l-29.12-40.77A6 6 0 0 0 74 152v56a6 6 0 0 0 12 0v-37.28l29.12 40.77A6 6 0 0 0 120 214a5.8 5.8 0 0 0 1.83-.29A6 6 0 0 0 126 208v-56a6 6 0 0 0-6-6m40 0a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-56a6 6 0 0 0-6-6m54-58v136a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-56-6h35.52L158 46.48Z" />
      </G>
    </Svg>
  );
};