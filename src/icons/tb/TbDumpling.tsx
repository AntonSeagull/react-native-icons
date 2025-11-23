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

export const TbDumpling = (props: IconProps) => {
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
        <Path d="M5.532 5.532a2.53 2.53 0 0 1 2.56-.623 2.532 2.532 0 0 1 4.604-.717q.146-.24.356-.45a2.532 2.532 0 0 1 4.318 1.637 2.53 2.53 0 0 1 2.844.511l.358.358c1.384 1.385-.7 5.713-4.655 9.669-3.956 3.955-8.284 6.04-9.669 4.655l-.358-.358-.114-.122a2.53 2.53 0 0 1-.398-2.724 2.532 2.532 0 0 1-1.186-4.675A2.532 2.532 0 0 1 4.91 8.09a2.53 2.53 0 0 1 .622-2.558" />
      </G>
    </Svg>
  );
};