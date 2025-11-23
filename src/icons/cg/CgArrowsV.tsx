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

export const CgArrowsV = (props: IconProps) => {
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
        <Path fill="currentColor" d="m7.757 5.04 1.415 1.415L11 4.627V10h2V4.627l1.828 1.828 1.415-1.414L12 .798zM16.243 18.96l-1.415-1.415L13 19.373V14h-2v5.374l-1.828-1.829-1.415 1.414L12 23.202z" />
      </G>
    </Svg>
  );
};