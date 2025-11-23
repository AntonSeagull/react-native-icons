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

export const SiSlashdot = (props: IconProps) => {
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
        <Path d="M19.777 0 7.037 24H1.868L14.605 0zm2.354 19.801c0 2.268-1.841 4.105-4.109 4.105a4.106 4.106 0 1 1 0-8.212 4.11 4.11 0 0 1 4.109 4.107" />
      </G>
    </Svg>
  );
};