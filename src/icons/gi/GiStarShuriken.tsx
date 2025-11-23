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

export const GiStarShuriken = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M324.52 191.715a98 98 0 0 0-4.228-4.229L256 22.303l-64.291 165.183a93 93 0 0 0-4.222 4.224L22.301 255.998l165.179 64.291a98 98 0 0 0 4.229 4.229L256 489.697l64.284-165.174a95 95 0 0 0 4.237-4.233l165.178-64.287zM256 297.773c-23.067 0-41.77-18.705-41.77-41.775 0-23.067 18.703-41.767 41.77-41.767s41.767 18.7 41.767 41.767c0 23.07-18.7 41.775-41.767 41.775" />
      </G>
    </Svg>
  );
};