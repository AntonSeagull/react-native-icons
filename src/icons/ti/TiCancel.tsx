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

export const TiCancel = (props: IconProps) => {
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
        <Path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m-5 8c0-.832.224-1.604.584-2.295l6.711 6.711A4.94 4.94 0 0 1 12 17c-2.757 0-5-2.243-5-5m9.416 2.295L9.705 7.584A4.94 4.94 0 0 1 12 7c2.757 0 5 2.243 5 5 0 .832-.224 1.604-.584 2.295" />
      </G>
    </Svg>
  );
};