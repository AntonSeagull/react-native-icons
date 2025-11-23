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

export const VscCode = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M4.708 5.578 2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87zM4.908 13l.894.448 5-10L9.908 3z" />
      </G>
    </Svg>
  );
};