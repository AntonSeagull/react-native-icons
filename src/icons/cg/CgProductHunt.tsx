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

export const CgProductHunt = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14m-9-7a9 9 0 1 1 18 0 9 9 0 0 1-18 0m6 4V8h4a3 3 0 1 1 0 6h-2v2zm5-5a1 1 0 0 1-1 1h-2v-2h2a1 1 0 0 1 1 1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};