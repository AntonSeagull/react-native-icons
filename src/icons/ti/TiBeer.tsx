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

export const TiBeer = (props: IconProps) => {
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
        <Path d="M10 16.5c0 .275-.225.5-.5.5s-.5-.225-.5-.5v-6c0-.275.225-.5.5-.5s.5.225.5.5zm2 0c0 .275-.225.5-.5.5s-.5-.225-.5-.5v-6c0-.275.225-.5.5-.5s.5.225.5.5zm2 0c0 .275-.225.5-.5.5s-.5-.225-.5-.5v-6c0-.275.225-.5.5-.5s.5.225.5.5zM18.5 6H18V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v13c0 1.656 1.344 3 3 3h7c1.656 0 3-1.344 3-3h.5c1.93 0 3.5-1.57 3.5-3.5v-5C22 7.57 20.43 6 18.5 6M7 5h9v1h-4.444l-.118.332c-.164.458-.663.73-1.117.648l-.348-.058-.173.307A1.5 1.5 0 0 1 8.5 8C7.673 8 7 7.327 7 6.5zm9 13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8.49c.419.317.936.51 1.5.51.784 0 1.521-.376 1.989-1 .728 0 1.383-.391 1.736-1H16zm4-3.5c0 .827-.673 1.5-1.5 1.5H17V8h1.5c.827 0 1.5.673 1.5 1.5z" />
      </G>
    </Svg>
  );
};