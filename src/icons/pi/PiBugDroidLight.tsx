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

export const PiBugDroidLight = (props: IconProps) => {
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
        <Path d="m189 51.47 15.22-15.23a6 6 0 1 0-8.48-8.48L180 43.54a85.76 85.76 0 0 0-104 0L60.24 27.76a6 6 0 0 0-8.48 8.48L67 51.47A85.7 85.7 0 0 0 42 112v40a86 86 0 0 0 172 0v-40a85.7 85.7 0 0 0-25-60.53M128 38a74.09 74.09 0 0 1 74 74v10H54v-10a74.09 74.09 0 0 1 74-74m0 188a74.09 74.09 0 0 1-74-74v-18h148v18a74.09 74.09 0 0 1-74 74m18-134a10 10 0 1 1 10 10 10 10 0 0 1-10-10m-56 0a10 10 0 1 1 10 10 10 10 0 0 1-10-10" />
      </G>
    </Svg>
  );
};