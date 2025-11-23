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

export const CiCompass1 = (props: IconProps) => {
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
        <Path d="M4.661 20.937a1.6 1.6 0 0 1-1.117-.48 1.53 1.53 0 0 1-.4-1.59l3.436-9.93A3.8 3.8 0 0 1 8.938 6.58l9.93-3.439a1.54 1.54 0 0 1 1.589.4 1.53 1.53 0 0 1 .4 1.588l-3.437 9.932a3.8 3.8 0 0 1-2.358 2.358l-9.93 3.439a1.4 1.4 0 0 1-.471.079M19.337 4.062a.4.4 0 0 0-.142.024L9.267 7.525a2.8 2.8 0 0 0-1.742 1.741L4.087 19.2a.6.6 0 0 0 .717.718l9.93-3.439a2.8 2.8 0 0 0 1.741-1.741L19.913 4.8a.55.55 0 0 0-.163-.553.6.6 0 0 0-.413-.185" />
        <Circle cx={12} cy={12} r={1.563} />
      </G>
    </Svg>
  );
};