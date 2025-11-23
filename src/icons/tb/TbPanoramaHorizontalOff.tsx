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

export const TbPanoramaHorizontalOff = (props: IconProps) => {
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
        <Path d="M10.95 6.952q4.352.225 8.705-1.42A1 1 0 0 1 21 6.466V17m-3.212.806q-6.724-1.922-13.449.622A.993.993 0 0 1 3 17.493V6.466a1 1 0 0 1 1.338-.935q.882.332 1.764.59M3 3l18 18" />
      </G>
    </Svg>
  );
};