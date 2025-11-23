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

export const SiSemaphoreci = (props: IconProps) => {
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
        <Path d="m21.503 13.255-4.158-4.228a3.04 3.04 0 0 0-4.359 0l-3.292 3.347a1.207 1.207 0 0 1-1.721 0l-1.631-1.659L10.5 6.487a6.53 6.53 0 0 1 9.342 0L24 10.715zM8.83 19.479a6.53 6.53 0 0 1-4.671-1.965L0 13.295l2.487-2.529 4.157 4.218a3.056 3.056 0 0 0 4.36 0l3.291-3.348a1.207 1.207 0 0 1 1.721 0l1.631 1.659-4.147 4.229a6.52 6.52 0 0 1-4.671 1.955" />
      </G>
    </Svg>
  );
};