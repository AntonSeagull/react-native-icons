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

export const TfiAngleDoubleUp = (props: IconProps) => {
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
        <Path d="m8.5 6.073 6.854 6.854-.707.707L8.5 7.487l-6.146 6.146-.707-.707zm0-3.429 6.146 6.146.707-.707L8.5 1.229 1.646 8.083l.708.707z" />
      </G>
    </Svg>
  );
};