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

export const SiAsciidoctor = (props: IconProps) => {
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
        <Path d="M18.069 0H5.932A5.934 5.934 0 0 0 0 5.932v12.136A5.935 5.935 0 0 0 5.932 24h12.136A5.934 5.934 0 0 0 24 18.068V5.932A5.934 5.934 0 0 0 18.069 0m-7.361 15.404H8.81l-.005.013L7.2 19.282a.506.506 0 1 1-.934-.388l1.45-3.49H4.868a.506.506 0 1 1 0-1.012h5.84a.506.506 0 1 1 0 1.012zm7.919 4.165a.506.506 0 0 1-.655-.29L12.621 6.232l-2.395 5.76h1.55a.506.506 0 1 1 0 1.012h-5.84a.506.506 0 1 1 0-1.011h3.195l.004-.012 3.022-7.269a.51.51 0 0 1 .457-.311.51.51 0 0 1 .478.314l5.816 14.182a.506.506 0 0 1-.281.673" />
      </G>
    </Svg>
  );
};