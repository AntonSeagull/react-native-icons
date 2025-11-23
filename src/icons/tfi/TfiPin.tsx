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

export const TfiPin = (props: IconProps) => {
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
        <Path d="M12 4.5C12 2.57 10.43 1 8.5 1S5 2.57 5 4.5a3.495 3.495 0 0 0 2.962 3.445V16h1V7.953C10.672 7.725 12 6.271 12 4.5M8.5 7C7.121 7 6 5.879 6 4.5S7.121 2 8.5 2 11 3.121 11 4.5 9.879 7 8.5 7M10 5H9a1 1 0 0 0-1-1V3c1.103 0 2 .897 2 2" />
      </G>
    </Svg>
  );
};