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

export const TiNotes = (props: IconProps) => {
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
        <Path d="M18.831 4.059a.5.5 0 0 0-.394-.121l-11 1.25A.5.5 0 0 0 7 5.684V16c-1.654 0-3 1.122-3 2.5S5.346 21 7 21s3-1.122 3-2.5v-7.609l6-.625V14c-1.654 0-3 1.122-3 2.5s1.346 2.5 3 2.5 3-1.122 3-2.5V4.434a.5.5 0 0 0-.169-.375" />
      </G>
    </Svg>
  );
};