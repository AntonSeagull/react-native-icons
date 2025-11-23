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

export const TbBrandAmongUs = (props: IconProps) => {
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
        <Path d="M10.646 12.774c-1.939.396-4.467.317-6.234-.601-2.454-1.263-1.537-4.66 1.423-4.982 2.254-.224 3.814-.354 5.65.214.835.256 1.93.569 1.355 3.281-.191 1.067-1.07 1.904-2.194 2.088" />
        <Path d="M5.84 7.132q.125-.848.392-1.661c.456-.936 1.095-2.068 3.985-2.456a22.5 22.5 0 0 1 2.867.08c1.776.14 2.643 1.234 3.287 3.368.339 1.157.46 2.342.629 3.537v11l-12.704-.019c-.552-2.386-.262-5.894.204-8.481M17 10c.991.163 2.105.383 3.069.67.255.13.52.275.534.505.264 3.434.57 7.448.278 9.825H17" />
      </G>
    </Svg>
  );
};