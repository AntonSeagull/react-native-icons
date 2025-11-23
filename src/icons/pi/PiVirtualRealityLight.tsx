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

export const PiVirtualRealityLight = (props: IconProps) => {
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
        <Path d="m121.62 98.11-24 64a6 6 0 0 1-11.24 0l-24-64a6 6 0 0 1 11.24-4.22l18.38 49 18.38-49a6 6 0 1 1 11.24 4.22M254 128a78.09 78.09 0 0 1-78 78H80a78 78 0 0 1 0-156h96a78.09 78.09 0 0 1 78 78m-12 0a66.08 66.08 0 0 0-66-66H80a66 66 0 0 0 0 132h96a66.08 66.08 0 0 0 66-66m-63.8 9.76 11 19.26a6 6 0 0 1-10.42 6l-12.07-21.12a27 27 0 0 1-2.71.1h-14v18a6 6 0 0 1-12 0V96a6 6 0 0 1 6-6h20a26 26 0 0 1 14.2 47.76M164 130a14 14 0 0 0 0-28h-14v28Z" />
      </G>
    </Svg>
  );
};