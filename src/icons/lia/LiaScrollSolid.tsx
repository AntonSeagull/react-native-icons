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

export const LiaScrollSolid = (props: IconProps) => {
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
        <Path d="M10 4C8.355 4 7 5.355 7 7v14H4v4c0 1.645 1.355 3 3 3h14.031A3.017 3.017 0 0 0 24 25V11h4V7c0-1.645-1.355-3-3-3zm0 2h12.188A3 3 0 0 0 22 7v18c0 .566-.434 1-1 1-.563.008-.992-.438-1-1l-.031-4H9V7c0-.566.434-1 1-1m15 0c.566 0 1 .434 1 1v2h-2V7c0-.566.434-1 1-1M6 23h12v2.031c.004.344.075.66.188.969H7c-.566 0-1-.434-1-1z" />
      </G>
    </Svg>
  );
};