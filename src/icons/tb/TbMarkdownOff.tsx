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

export const TbMarkdownOff = (props: IconProps) => {
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
        <Path d="M9 5h10a2 2 0 0 1 2 2v10M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 1.85-2" />
        <Path d="M7 15V9l2 2 1-1m1 1v4M17.5 13.5l.5-.5m-2-1V9M3 3l18 18" />
      </G>
    </Svg>
  );
};