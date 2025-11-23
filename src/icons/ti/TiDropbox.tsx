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

export const TiDropbox = (props: IconProps) => {
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
        <Path d="m3 12.9 5.3 3.5 3.7-3.1L6.7 10zm5.3-9.3L3 7.1 6.7 10 12 6.7zM21 7.1l-5.3-3.5L12 6.7l5.3 3.3zm-9 6.2 3.7 3.1 5.3-3.5-3.7-2.9zm0 1.2-3.7 3.1-1.6-1.1v1.2l5.3 3.2 5.3-3.2v-1.2l-1.6 1.1z" />
      </G>
    </Svg>
  );
};