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

export const HiOutlineVariable = (props: IconProps) => {
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
        <Path strokeLinecap="round" strokeLinejoin="round" d="M4.871 4A17.9 17.9 0 0 0 3 12c0 2.874.673 5.59 1.871 8m14.13 0a17.9 17.9 0 0 0 1.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 0 1 .961.725l1.586 5.55a1 1 0 0 0 .961.725H15m1-7h-.08a2 2 0 0 0-1.519.698L9.6 15.302A2 2 0 0 1 8.08 16H8" />
      </G>
    </Svg>
  );
};