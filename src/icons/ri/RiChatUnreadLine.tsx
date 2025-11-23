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

export const RiChatUnreadLine = (props: IconProps) => {
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
        <Path d="M21 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6m1 11V8.9a5 5 0 0 1-2 0V17H5.763L4 18.385V5h12.1a5 5 0 0 1 0-2H3a1 1 0 0 0-1 1v18.5L6.455 19H21a1 1 0 0 0 1-1" />
      </G>
    </Svg>
  );
};