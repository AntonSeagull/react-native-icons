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

export const PiArrowsSplitThin = (props: IconProps) => {
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
        <Path d="m226.83 186.83-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L188 206.34v-68.68l-60-60-60 60v68.68l25.17-25.17a4 4 0 0 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L60 206.34V136a4 4 0 0 1 1.17-2.83L124 70.34V24a4 4 0 0 1 8 0v46.34l62.83 62.83A4 4 0 0 1 196 136v70.34l25.17-25.17a4 4 0 0 1 5.66 5.66" />
      </G>
    </Svg>
  );
};