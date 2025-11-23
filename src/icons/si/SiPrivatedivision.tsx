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

export const SiPrivatedivision = (props: IconProps) => {
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
        <Path d="M12.384.248A.42.42 0 0 0 11.998 0a.43.43 0 0 0-.387.248L6.172 12.002l5.441 11.752a.428.428 0 0 0 .616.18.43.43 0 0 0 .157-.18l5.443-11.752zm-.386 18.449-3.101-6.695 3.101-6.697 3.1 6.697z" />
      </G>
    </Svg>
  );
};