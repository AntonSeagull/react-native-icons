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

export const LiaCloudsmith = (props: IconProps) => {
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
        <Path d="M18.854 3c-2.41 0-4.563 1.95-4.563 4.35 0 2.41-1.531 3.941-3.941 3.941-2.4 0-4.35 2.152-4.35 4.563S7.95 20 10.35 20c2.41 0 4.357-1.734 4.357-4.145s1.737-4.146 4.147-4.146c2.4 0 4.146-1.95 4.146-4.36C23 4.952 21.254 3 18.854 3m.652 17a4.501 4.501 0 1 0-.01 9.002 4.501 4.501 0 0 0 .01-9.002" />
      </G>
    </Svg>
  );
};