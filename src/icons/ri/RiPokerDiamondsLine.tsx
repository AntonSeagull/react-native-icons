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

export const RiPokerDiamondsLine = (props: IconProps) => {
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
        <Path d="M4.036 10.733a2 2 0 0 0 0 2.533l7.19 8.788a1 1 0 0 0 1.548 0l7.19-8.788a2 2 0 0 0 0-2.533l-7.19-8.787a1 1 0 0 0-1.548 0zM12 4.158 18.416 12 12 19.842 5.584 12z" />
      </G>
    </Svg>
  );
};