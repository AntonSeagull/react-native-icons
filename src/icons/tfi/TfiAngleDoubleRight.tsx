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

export const TfiAngleDoubleRight = (props: IconProps) => {
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
        <Path d="M9.644 8.5 2.79 15.354l-.707-.707L8.229 8.5 2.083 2.354l.707-.708zm-2.01-6.854-.707.708L13.073 8.5l-6.146 6.146.707.707L14.487 8.5z" />
      </G>
    </Svg>
  );
};