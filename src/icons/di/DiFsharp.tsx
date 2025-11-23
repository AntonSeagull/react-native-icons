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

export const DiFsharp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 27 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 13.5, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="m6.789 10.152-6.114 6.12 12.262 12.262v-6.131l-6.131-6.131 6.131-6.131-.011-3.054-.016-3.049-6.12 6.114zm3.941 3.947-2.173 2.173 4.379 4.379v-4.368c0-2.398-.005-4.363-.016-4.363-.005 0-.991.98-2.19 2.179m9.448 8.32 6.114-6.12L14.03 4.037v6.131l6.131 6.131-6.131 6.131.011 3.054.016 3.049 6.12-6.114z" />
      </G>
    </Svg>
  );
};