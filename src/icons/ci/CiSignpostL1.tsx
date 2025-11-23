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

export const CiSignpostL1 = (props: IconProps) => {
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
        <Path d="M20.437 16H6.536a2.5 2.5 0 0 1-1.744-.709L2.542 13.1a1.5 1.5 0 0 1 .007-2.2l2.243-2.191A2.48 2.48 0 0 1 6.536 8h13.9a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.499 1.5M6.536 9a1.5 1.5 0 0 0-1.046.425l-2.255 2.2a.5.5 0 0 0-.172.375.5.5 0 0 0 .162.369l.01.01 2.254 2.2A1.5 1.5 0 0 0 6.536 15h13.9a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5Z" data-name="Signpost L 1" />
      </G>
    </Svg>
  );
};