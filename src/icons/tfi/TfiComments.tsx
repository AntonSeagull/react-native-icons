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

export const TfiComments = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M17 1.5v7.969c0 .827-.673 1.5-1.5 1.5h-.508v-1h.508a.5.5 0 0 0 .5-.5V1.5a.5.5 0 0 0-.5-.5h-14a.5.5 0 0 0-.5.5v7.969a.5.5 0 0 0 .5.5H3v2.892l1.779-1.569.661.75L2 15.077v-4.108h-.5c-.827 0-1.5-.673-1.5-1.5V1.5C0 .673.673 0 1.5 0h14c.827 0 1.5.673 1.5 1.5m-2.98 8.04v3.043c0 .827-.673 1.5-1.5 1.5h-.5v3.064l-3.667-3.064H7.5c-.827 0-1.5-.673-1.5-1.5V9.54c0-.827.673-1.5 1.5-1.5h5.02c.827 0 1.5.673 1.5 1.5m-1 0a.5.5 0 0 0-.5-.5H7.5a.5.5 0 0 0-.5.5v3.043a.5.5 0 0 0 .5.5h1.217l2.303 1.926v-1.926h1.5a.5.5 0 0 0 .5-.5z" />
      </G>
    </Svg>
  );
};