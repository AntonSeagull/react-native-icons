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

export const TfiAngleDoubleDown = (props: IconProps) => {
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
        <Path d="M8.5 10.644 1.646 3.79l.707-.707L8.5 9.229l6.146-6.146.707.707zm0 3.43L2.354 7.927l-.708.707L8.5 15.488l6.854-6.854-.707-.707z" />
      </G>
    </Svg>
  );
};