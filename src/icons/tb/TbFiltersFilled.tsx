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

export const TbFiltersFilled = (props: IconProps) => {
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
        <Path d="M19.396 11.056a6 6 0 0 1-5.647 10.506q.206-.21.396-.44a8 8 0 0 0 1.789-6.155 8.02 8.02 0 0 0 3.462-3.911M4.609 11.051a7.99 7.99 0 0 0 9.386 4.698 6 6 0 1 1-9.534-4.594z" />
        <Path d="M12 2a6 6 0 1 1-6 6l.004-.225A6 6 0 0 1 12 2" />
      </G>
    </Svg>
  );
};