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

export const TbMilitaryRankFilled = (props: IconProps) => {
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
        <Path d="m12.555 2.168 6 4A1 1 0 0 1 19 7v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7a1 1 0 0 1 .445-.832l6-4a1 1 0 0 1 1.11 0m-.108 12.938a1 1 0 0 0-.894 0l-2 1a1 1 0 0 0-.447 1.341l.058.102a1 1 0 0 0 1.283.345L12 17.118l1.553.776a1 1 0 0 0 .894-1.788zm0-4a1 1 0 0 0-.894 0l-2 1a1 1 0 0 0-.447 1.341l.058.102a1 1 0 0 0 1.283.345L12 13.118l1.553.776a1 1 0 0 0 .894-1.788zm0-4a1 1 0 0 0-.894 0l-2 1a1 1 0 0 0-.447 1.341l.058.102a1 1 0 0 0 1.283.345L12 9.118l1.553.776a1 1 0 0 0 .894-1.788z" />
      </G>
    </Svg>
  );
};