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

export const TfiLayoutSlider = (props: IconProps) => {
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
        <Path d="M0 1v14h17V1zm16 13H1V2h15zM4.646 10.354 2.293 8l2.354-2.354.707.707L3.707 8l1.646 1.646zm7-.708L13.293 8l-1.646-1.646.707-.707L14.707 8l-2.354 2.354z" />
      </G>
    </Svg>
  );
};