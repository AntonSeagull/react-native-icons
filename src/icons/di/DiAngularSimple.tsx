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

export const DiAngularSimple = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="m15.937 11.355-2.057 4.879h4.433l-2.358-4.924-.019.044zm.027-7.055L4.685 8.269l1.782 14.777 9.508 5.226 9.557-5.297 1.782-14.776L15.963 4.3zm4.78 17.549-1.531-3.545h-6.25l-1.398 3.497-2.601.048 6.973-15.513 7.216 15.513z" />
      </G>
    </Svg>
  );
};