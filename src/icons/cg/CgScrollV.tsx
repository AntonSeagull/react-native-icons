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

export const CgScrollV = (props: IconProps) => {
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
        <Path fill="currentColor" d="m9.172 16.818-1.415 1.414L12 22.475l4.243-4.243-1.415-1.414L12 19.647zM14.828 7.182l1.415-1.414L12 1.525 7.757 5.768l1.415 1.414L12 4.354z" />
        <Path fill="currentColor" fillRule="evenodd" d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2" clipRule="evenodd" />
      </G>
    </Svg>
  );
};