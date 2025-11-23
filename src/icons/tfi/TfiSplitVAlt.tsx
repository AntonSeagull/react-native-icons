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

export const TfiSplitVAlt = (props: IconProps) => {
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
        <Path d="M5.354 5.854 2.707 8.5l2.646 2.646-.707.707L1.293 8.5l3.354-3.354zm7-.708-.707.707L14.293 8.5l-2.646 2.646.707.707L15.707 8.5zM8 17h1V0H8z" />
      </G>
    </Svg>
  );
};