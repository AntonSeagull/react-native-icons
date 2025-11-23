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

export const CgArrowsShrinkV = (props: IconProps) => {
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
        <Path fill="currentColor" d="M17 1v2H7V1zM16.243 8.448l-1.414 1.414L13 8.033v7.934l1.829-1.829 1.414 1.414L12 19.795l-4.243-4.243 1.415-1.414L11 15.966V8.034L9.172 9.862 7.757 8.448 12 4.205zM17 23v-2H7v2z" />
      </G>
    </Svg>
  );
};