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

export const CgArrowAlignV = (props: IconProps) => {
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
        <Path fill="currentColor" d="M7 11v2h10v-2zM7.757 18l1.415-1.414L11 18.414V14h2v4.414l1.828-1.828L16.243 18 12 22.243zM16.243 6l-1.414 1.414L13 5.586V10h-2V5.586L9.172 7.414 7.757 6 12 1.757z" />
      </G>
    </Svg>
  );
};