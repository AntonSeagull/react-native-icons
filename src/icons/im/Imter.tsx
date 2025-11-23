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

export const Imter = (props: IconProps) => {
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
        <Path d="M8 0C3.582 0 0 1.119 0 2.5V4l6 6v5c0 .552.895 1 2 1s2-.448 2-1v-5l6-6V2.5C16 1.119 12.418 0 8 0M1.475 2.169c.374-.213.9-.416 1.52-.586C4.369 1.207 6.147 1 8 1s3.631.207 5.005.583c.62.17 1.146.372 1.52.586.247.141.38.26.442.331-.062.071-.195.19-.442.331-.374.213-.9.416-1.52.586C11.631 3.793 9.853 4 8 4s-3.631-.207-5.005-.583c-.62-.17-1.146-.372-1.52-.586a1.7 1.7 0 0 1-.442-.331c.062-.071.195-.19.442-.331" />
      </G>
    </Svg>
  );
};