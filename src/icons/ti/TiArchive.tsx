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

export const TiArchive = (props: IconProps) => {
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
        <Path d="M13 12h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m7-7H3a1 1 0 1 0 0 2h17a1 1 0 1 0 0-2m-2 3H5a1 1 0 0 0-1 1v8c0 1.654 1.346 3 3 3h9c1.654 0 3-1.346 3-3V9a1 1 0 0 0-1-1m-2 10H7c-.552 0-1-.449-1-1v-7h11v7c0 .551-.448 1-1 1" />
      </G>
    </Svg>
  );
};