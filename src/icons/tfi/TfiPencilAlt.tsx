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

export const TfiPencilAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16.499 1.843 15.096.44c-.566-.566-1.555-.566-2.122 0L5.438 7.976l-1.722 5.287 5.249-1.765 7.534-7.534c.283-.283.439-.66.439-1.061s-.156-.777-.439-1.06M5.584 10.758l.638-1.957 1.92 1.919-1.942.653zm1.248-2.762 3.986-3.986 2.11 2.11-3.986 3.986zm4.693-4.693.729-.729 2.11 2.11-.729.729zm4.267-.046-.72.721-2.11-2.11.72-.721a.51.51 0 0 1 .707 0l1.403 1.403a.5.5 0 0 1 0 .707M15 7.5h1V17H0V2h7.5v1H1v13h14z" />
      </G>
    </Svg>
  );
};