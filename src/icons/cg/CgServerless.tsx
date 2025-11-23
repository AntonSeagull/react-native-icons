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

export const CgServerless = (props: IconProps) => {
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
        <Path fill="currentColor" d="M11.787 6H5v3h5.695zM9.967 11H5v3h3.875zM11.004 14l1.092-3H20v3zM8.148 16H5v3h2.056zM9.184 19l1.092-3H20v3zM12.824 9l1.092-3H20v3z" />
      </G>
    </Svg>
  );
};