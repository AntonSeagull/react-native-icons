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

export const TbCannabis = (props: IconProps) => {
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
        <Path d="M7 20s0-2 1-3.5c-1.5 0-2-.5-4-1.5 0 0 1.839-1.38 5-1-1.789-.97-3.279-2.03-5-6 0 0 3.98-.3 6.5 3.5C8.216 6.6 12 2 12 2c2.734 5.47 2.389 7.5 1.5 9.5C16.031 7.73 20 8 20 8c-1.721 3.97-3.211 5.03-5 6 3.161-.38 5 1 5 1-2 1-2.5 1.5-4 1.5 1 1.5 1 3.5 1 3.5-2 0-4.438-2.22-5-3-.563.78-3 3-5 3M12 22v-5" />
      </G>
    </Svg>
  );
};