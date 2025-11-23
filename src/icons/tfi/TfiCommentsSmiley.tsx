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

export const TfiCommentsSmiley = (props: IconProps) => {
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
        <Path d="M13 8h1c0 2.481-2.019 4.5-4.5 4.5S5 10.481 5 8h1c0 1.93 1.57 3.5 3.5 3.5S13 9.93 13 8M7.5 6.5a1 1 0 1 0 0-2 1 1 0 1 0 0 2m4 0a1 1 0 1 0 0-2 1 1 0 1 0 0 2m5.5 1c0 4.136-3.364 7.5-7.5 7.5a7.47 7.47 0 0 1-3.803-1.041l-5.5 2.843 2.843-5.499A7.5 7.5 0 0 1 2 7.5C2 3.364 5.364 0 9.5 0S17 3.364 17 7.5m-1 0C16 3.916 13.084 1 9.5 1S3 3.916 3 7.5c0 1.244.358 2.459 1.036 3.511l.157.243-1.664 3.218 3.217-1.664.243.157A6.5 6.5 0 0 0 9.5 14c3.584 0 6.5-2.916 6.5-6.5" />
      </G>
    </Svg>
  );
};