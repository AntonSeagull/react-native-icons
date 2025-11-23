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

export const FaBookmark = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 384 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 192, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400z" />
      </G>
    </Svg>
  );
};