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

export const RiCapsuleLine = (props: IconProps) => {
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
        <Path d="M19.779 4.222a6 6 0 0 1 0 8.485l-7.071 7.071a6 6 0 0 1-8.486-8.485l7.071-7.071a6 6 0 0 1 8.486 0m-5.657 11.313L8.466 9.878l-2.83 2.83a4 4 0 0 0 5.657 5.656zm4.242-9.899a4 4 0 0 0-5.657 0L9.88 8.464l5.657 5.657 2.827-2.828a4 4 0 0 0 0-5.657" />
      </G>
    </Svg>
  );
};