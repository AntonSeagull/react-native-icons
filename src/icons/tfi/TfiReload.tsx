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

export const TfiReload = (props: IconProps) => {
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
        <Path d="M6 8H0V2h1v4.109C2.013 2.916 5.036.625 8.5.625c3.506 0 6.621 2.36 7.574 5.739l-.963.271A6.9 6.9 0 0 0 8.5 1.624C5.274 1.625 2.484 3.9 1.792 7H6zm5 1v1h4.208c-.693 3.101-3.479 5.375-6.708 5.375a6.895 6.895 0 0 1-6.611-5.011l-.963.271A7.9 7.9 0 0 0 8.5 16.374c3.459 0 6.475-2.28 7.5-5.482V15h1V9z" />
      </G>
    </Svg>
  );
};