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

export const RiCollapseDiagonal2Line = (props: IconProps) => {
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
        <Path d="M9 4h2v7H4V9h3.586L3.293 4.707l1.414-1.414L9 7.586zm11 11h-3.586l4.293 4.293-1.414 1.414L15 16.414V20h-2v-7h7z" />
      </G>
    </Svg>
  );
};