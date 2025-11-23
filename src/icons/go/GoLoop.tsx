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

export const GoLoop = (props: IconProps) => {
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
        <Path d="M3.109 5.603a9 9 0 0 1 12.728 0 .75.75 0 1 1-1.061 1.061 7.5 7.5 0 0 0-10.606 0 7.5 7.5 0 0 0 0 10.606 7.5 7.5 0 0 0 10.606 0l5.821-5.82H17.3a.75.75 0 0 1 0-1.5h4.75a1 1 0 0 1 1 1v4.75a.75.75 0 1 1-1.5 0v-3.083l-5.713 5.714A9 9 0 0 1 3.109 5.603" />
      </G>
    </Svg>
  );
};