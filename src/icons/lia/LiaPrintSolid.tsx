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

export const LiaPrintSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9 4v7H7c-1.645 0-3 1.355-3 3v10h5v4h14v-4h5V14c0-1.645-1.355-3-3-3h-2V4Zm2 2h10v5H11Zm-4 7h18c.566 0 1 .434 1 1v8h-3v-4H9v4H6v-8c0-.566.434-1 1-1m1 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m3 6h10v6H11Z" />
      </G>
    </Svg>
  );
};