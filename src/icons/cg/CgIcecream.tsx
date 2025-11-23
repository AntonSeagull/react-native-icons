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

export const CgIcecream = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M15 17h4V8A7 7 0 1 0 5 8v9h4v3a3 3 0 1 0 6 0zm2-2V8A5 5 0 0 0 7 8v7h4v5a1 1 0 1 0 2 0v-5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};