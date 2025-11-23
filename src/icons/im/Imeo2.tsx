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

export const Imeo2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5m-1.037 5.313q-.076 1.688-2.359 4.622-2.358 3.066-3.991 3.066-1.012 0-1.709-1.866-.468-1.711-.934-3.422-.517-1.866-1.112-1.866-.132 0-.906.544l-.544-.7q.858-.752 1.687-1.503 1.143-.985 1.712-1.038 1.35-.13 1.662 1.844.337 2.131.469 2.65.388 1.767.856 1.766.363.001 1.091-1.147c.728-1.148.744-1.347.778-1.747q.103-.99-.778-.991-.417 0-.856.191c.569-1.859 1.653-2.766 3.256-2.712q1.782.05 1.678 2.309" />
      </G>
    </Svg>
  );
};