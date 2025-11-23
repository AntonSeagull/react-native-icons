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

export const CgController = (props: IconProps) => {
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
        <Path fill="currentColor" d="m14.828 6.343 1.415-1.414L12 .686 7.757 4.93l1.415 1.414L12 3.515zM4.929 16.243l1.414-1.415L3.515 12l2.828-2.828L4.93 7.757.686 12zM7.757 19.071 12 23.314l4.243-4.243-1.415-1.414L12 20.485l-2.828-2.828zM17.657 9.172 20.485 12l-2.828 2.828 1.414 1.415L23.314 12 19.07 7.757z" />
        <Path fill="currentColor" fillRule="evenodd" d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" clipRule="evenodd" />
      </G>
    </Svg>
  );
};