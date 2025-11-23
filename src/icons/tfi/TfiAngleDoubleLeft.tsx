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

export const TfiAngleDoubleLeft = (props: IconProps) => {
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
        <Path d="m7.987 8.5 6.146 6.146-.707.707L6.573 8.5l6.854-6.854.707.707zM9.29 2.353l-.707-.707L1.729 8.5l6.854 6.854.707-.707L3.144 8.5z" />
      </G>
    </Svg>
  );
};