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

export const TbSkewY = (props: IconProps) => {
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
        <Path d="M4.326 19h15.348a1 1 0 0 0 .962-1.275l-3.429-12A1 1 0 0 0 16.246 5H7.754a1 1 0 0 0-.961.725l-3.429 12A1 1 0 0 0 4.326 19" />
      </G>
    </Svg>
  );
};