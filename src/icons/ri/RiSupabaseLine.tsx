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

export const RiSupabaseLine = (props: IconProps) => {
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
        <Path d="M11 2.598V13.97H3.9c-.67 0-1.07-.784-.643-1.336zm2 5.433V2.333c0-1.811-2.297-2.624-3.418-1.171L1.673 11.41C.246 13.26 1.548 15.969 3.9 15.969H11v5.698c0 1.811 2.296 2.624 3.418 1.171l7.908-10.249c1.427-1.849.126-4.558-2.227-4.558zm0 2h7.1c.669 0 1.069.784.643 1.336L13 21.402z" />
      </G>
    </Svg>
  );
};