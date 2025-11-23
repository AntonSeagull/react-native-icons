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

export const PiLinkSimpleBreak = (props: IconProps) => {
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
        <Path d="M232 80a55.67 55.67 0 0 1-16.4 39.6l-30.07 30.06a8 8 0 0 1-11.31-11.32l30.07-30.06a40 40 0 1 0-56.57-56.56l-30.06 30.05a8 8 0 0 1-11.32-11.32L136.4 40.4A56 56 0 0 1 232 80m-93.66 94.22-30.06 30.06a40 40 0 1 1-56.56-56.57l30.05-30.05a8 8 0 0 0-11.32-11.32L40.4 136.4a56 56 0 0 0 79.2 79.2l30.06-30.07a8 8 0 0 0-11.32-11.31" />
      </G>
    </Svg>
  );
};