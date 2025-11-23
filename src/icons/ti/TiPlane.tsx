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

export const TiPlane = (props: IconProps) => {
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
        <Path d="M19.996 13.507 14 10.081V4.125c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v5.956l-5.996 3.426a1 1 0 0 0 .77 1.829L11 13.844v4.451l-1.625 1.3a1 1 0 0 0 .996 1.709l2.129-.852 2.129.852q.183.072.371.071a1.001 1.001 0 0 0 .625-1.781L14 18.294v-4.451l5.226 1.493.274.039a1 1 0 0 0 .496-1.868M12.5 4.375a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" />
      </G>
    </Svg>
  );
};