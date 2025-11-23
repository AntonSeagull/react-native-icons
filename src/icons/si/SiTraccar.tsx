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

export const SiTraccar = (props: IconProps) => {
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
        <Path d="M6.001 1.61C.262 4.923-1.704 12.26 1.61 17.999s10.65 7.705 16.389 4.392S25.704 11.74 22.39 6 11.74-1.704 6 1.61m.706 1.222C11.77-.091 18.245 1.644 21.168 6.707s1.189 11.538-3.874 14.461-11.538 1.189-14.462-3.874S1.644 5.756 6.707 2.832m3.914 14.315a3.768 3.768 0 1 1-3.768-6.526l1.884 3.263Zm5.725-11.395L15.17 7.247c.665.511 1.28 1.156 1.725 1.927s.696 1.626.807 2.458l1.882-.272a8.404 8.404 0 0 0-3.238-5.608m-2.272 3.011-1.176 1.495c.274.216.548.48.734.8s.276.69.325 1.036l1.883-.272a4.6 4.6 0 0 0-.577-1.706 4.6 4.6 0 0 0-1.189-1.353Zm-3.832 3.708a.942.942 0 1 0 1.884 0 .942.942 0 1 0-1.884 0" />
      </G>
    </Svg>
  );
};