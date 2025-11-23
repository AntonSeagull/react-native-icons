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

export const RiHandHeartFill = (props: IconProps) => {
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
        <Path d="M9.335 11.502h2.17a4.5 4.5 0 0 1 4.5 4.5H9.004v1h8v-1a5.6 5.6 0 0 0-.885-3h2.886a5 5 0 0 1 4.516 2.852c-2.365 3.12-6.194 5.149-10.516 5.149-2.761 0-5.1-.59-7-1.625v-9.304a6.97 6.97 0 0 1 3.33 1.428m-5.33-2.5a1 1 0 0 1 .993.884l.007.116v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm9.646-5.424.354.354.353-.354a2.5 2.5 0 0 1 3.536 3.536l-3.89 3.889-3.888-3.89a2.5 2.5 0 1 1 3.535-3.535" />
      </G>
    </Svg>
  );
};