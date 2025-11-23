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

export const VscVersions = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M8 3 7 4v8l1 1h6l1-1V4l-1-1zm6 9H8V4h6zM5 9V5h1V4H4.5l-.5.5v7l.5.5H6v-1H5zM2 8V6h1V5H1.5l-.5.5v5l.5.5H3v-1H2z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};