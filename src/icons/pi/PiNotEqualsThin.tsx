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

export const PiNotEqualsThin = (props: IconProps) => {
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
        <Path d="M220 160a4 4 0 0 1-4 4H100.68L51 218.69a4 4 0 0 1-6-5.38L89.87 164H40a4 4 0 0 1 0-8h57.14l50.91-56H40a4 4 0 0 1 0-8h115.32L205 37.31a4 4 0 0 1 6 5.38L166.13 92H216a4 4 0 0 1 0 8h-57.14L108 156h108a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};