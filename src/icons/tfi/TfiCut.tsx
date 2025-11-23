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

export const TfiCut = (props: IconProps) => {
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
        <Path d="M13 11c-.545 0-1.049.157-1.49.412L9.188 8.958l6.26-6.614-.727-.688L8.5 8.23 2.277 1.656l-.726.688 6.26 6.614-2.322 2.453A2.97 2.97 0 0 0 4 11c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-.747-.285-1.424-.738-1.949L8.5 9.686l2.238 2.365A2.97 2.97 0 0 0 10 14c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3m-9 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m9 0c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2" />
      </G>
    </Svg>
  );
};