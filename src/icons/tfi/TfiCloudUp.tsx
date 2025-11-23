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

export const TfiCloudUp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M17 6.75A4.255 4.255 0 0 1 12.75 11H9.993v-1h2.757C14.542 10 16 8.542 16 6.75S14.542 3.5 12.75 3.5a3.2 3.2 0 0 0-1.56.417l-.354.195-.265-.306A3.74 3.74 0 0 0 7.75 2.5c-1.661 0-3.099 1.08-3.576 2.688l-.126.422-.435-.072c-.119-.019-.238-.038-.363-.038C2.01 5.5 1 6.509 1 7.75S2.01 10 3.25 10h3.699v1H3.25A3.254 3.254 0 0 1 0 7.75c0-1.826 1.529-3.335 3.353-3.248A4.7 4.7 0 0 1 7.75 1.5c1.234 0 2.42.494 3.309 1.367A4.1 4.1 0 0 1 12.75 2.5 4.255 4.255 0 0 1 17 6.75m-6.354 2.104.707-.707L8.5 5.293 5.646 8.146l.707.707L8 7.207V15h1V7.207z" />
      </G>
    </Svg>
  );
};