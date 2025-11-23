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

export const CgArrowsVAlt = (props: IconProps) => {
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
        <Path fill="currentColor" d="M9.172 6.455 7.757 5.041 12 .798l4.243 4.243-1.415 1.414L13 4.627v14.746l1.828-1.828 1.415 1.414L12 23.202l-4.243-4.243 1.415-1.414L11 19.373V4.627z" />
      </G>
    </Svg>
  );
};