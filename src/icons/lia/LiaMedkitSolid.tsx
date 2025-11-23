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

export const LiaMedkitSolid = (props: IconProps) => {
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
        <Path d="M14 5c-1.094 0-2 .906-2 2v1H6c-1.645 0-3 1.355-3 3v15h26V11c0-1.645-1.355-3-3-3h-6V7c0-1.094-.906-2-2-2Zm0 2h4v1h-4Zm-8 3h20c.566 0 1 .434 1 1v13H5V11c0-.566.434-1 1-1m9 3v3h-3v2h3v3h2v-3h3v-2h-3v-3Z" />
      </G>
    </Svg>
  );
};