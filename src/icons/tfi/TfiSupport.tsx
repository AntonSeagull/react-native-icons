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

export const TfiSupport = (props: IconProps) => {
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
        <Path d="M13.384 3c-.937-1.829-2.805-3-4.884-3S4.554 1.17 3.616 3H0v13h17V3zM8.5 1c1.522 0 2.907.767 3.732 2H4.768A4.49 4.49 0 0 1 8.5 1M16 15H1V4h15zm-8-5H6V9h2V7h1v2h2v1H9v2H8z" />
      </G>
    </Svg>
  );
};