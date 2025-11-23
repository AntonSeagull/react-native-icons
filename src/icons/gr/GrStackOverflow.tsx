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

export const GrStackOverflow = (props: IconProps) => {
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
        <Path fill="#BCBBBB" d="M19.127 21.866v-6.43h2.134V24H2v-8.563h2.134v6.43z" />
        <Path fill="#F48023" d="m6.49 14.827 10.475 2.19.444-2.107-10.476-2.19zm1.385-4.989 9.7 4.518.887-1.94-9.7-4.545zm2.688-4.766 8.231 6.845 1.358-1.635-8.23-6.846zM15.884 0l-1.718 1.275 6.374 8.591 1.719-1.275zM6.268 19.704h10.697V17.57H6.268z" />
      </G>
    </Svg>
  );
};