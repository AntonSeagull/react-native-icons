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

export const PiMapTrifoldLight = (props: IconProps) => {
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
        <Path d="M227.69 51.27a6 6 0 0 0-5.15-1.09L160.7 65.64l-62-31a6 6 0 0 0-4.14-.45l-64 16A6 6 0 0 0 26 56v144a6 6 0 0 0 7.46 5.82l61.84-15.46 62 31a6 6 0 0 0 4.14.45l64-16A6 6 0 0 0 230 200V56a6 6 0 0 0-2.31-4.73M102 49.71l52 26v130.58l-52-26Zm-64 11 52-13v131.61l-52 13Zm180 134.61-52 13V76.68l52-13Z" />
      </G>
    </Svg>
  );
};