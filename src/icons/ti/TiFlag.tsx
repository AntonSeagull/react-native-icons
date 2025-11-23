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

export const TiFlag = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M18.383 4.318a1 1 0 0 0-1.09.217 3.25 3.25 0 0 1-4.586 0 5.25 5.25 0 0 0-7.414 0A1 1 0 0 0 5 5.242v13a1 1 0 1 0 2 0v-4.553a3.25 3.25 0 0 1 4.293.26 5.25 5.25 0 0 0 7.414 0 1 1 0 0 0 .293-.707v-8a1 1 0 0 0-.617-.924" />
      </G>
    </Svg>
  );
};