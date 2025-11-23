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

export const PiWebcamLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M166 104a38 38 0 1 0-38 38 38 38 0 0 0 38-38m-64 0a26 26 0 1 1 26 26 26 26 0 0 1-26-26m122 98h-90v-20.25a78 78 0 1 0-12 0V202H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12M62 104a66 66 0 1 1 66 66 66.08 66.08 0 0 1-66-66" />
      </G>
    </Svg>
  );
};