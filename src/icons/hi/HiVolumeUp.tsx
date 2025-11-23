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

export const HiVolumeUp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M9.383 3.076A1 1 0 0 1 10 4v12a1 1 0 0 1-1.707.707L4.586 13H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.586l3.707-3.707a1 1 0 0 1 1.09-.217m5.274-.147a1 1 0 0 1 1.414 0A9.97 9.97 0 0 1 19 10a9.97 9.97 0 0 1-2.929 7.071 1 1 0 0 1-1.414-1.414A7.97 7.97 0 0 0 17 10a7.97 7.97 0 0 0-2.343-5.657 1 1 0 0 1 0-1.414m-2.829 2.828a1 1 0 0 1 1.415 0A5.98 5.98 0 0 1 15 10a5.98 5.98 0 0 1-1.757 4.243 1 1 0 0 1-1.415-1.415A3.98 3.98 0 0 0 13 10a3.98 3.98 0 0 0-1.172-2.828 1 1 0 0 1 0-1.415" clipRule="evenodd" />
      </G>
    </Svg>
  );
};