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

export const TfiVideoCamera = (props: IconProps) => {
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
        <Path d="M12.991 6.75V4.5c0-.827-.678-1.5-1.512-1.5H4v-.5a.5.5 0 0 1 .5-.5h5.541V1H4.5C3.673 1 3 1.673 3 2.5V3H1.512C.678 3 0 3.673 0 4.5v2.001c0 .827.678 1.5 1.512 1.5h.504V13.5c0 .827.673 1.5 1.5 1.5h7.964c.834 0 1.512-.673 1.512-1.5v-2.251L17 14.032V3.967zM16 12.121l-4.009-2.783V13.5c0 .276-.229.5-.512.5H3.516a.5.5 0 0 1-.5-.5V7.001H1.512a.506.506 0 0 1-.512-.5V4.5c0-.276.229-.5.512-.5h9.968c.282 0 .512.224.512.5v4.163L16 5.879z" />
      </G>
    </Svg>
  );
};