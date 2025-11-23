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

export const TfiAgenda = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M14 2V0H1v17h13v-2h2V2zM2 16V1h2v15zm11 0H5V1h8zm2-2h-1v-3h1zm0-4h-1V7h1zm-1-4V3h1v3zM6 4h5v1H6zm0 2h4v1H6z" />
      </G>
    </Svg>
  );
};