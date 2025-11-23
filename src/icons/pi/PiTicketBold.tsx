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

export const PiTicketBold = (props: IconProps) => {
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
        <Path d="M232 108a12 12 0 0 0 12-12V64a20 20 0 0 0-20-20H32a20 20 0 0 0-20 20v32a12 12 0 0 0 12 12 20 20 0 0 1 0 40 12 12 0 0 0-12 12v32a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-32a12 12 0 0 0-12-12 20 20 0 0 1 0-40M36 170.34a44 44 0 0 0 0-84.68V68h52v120H36Zm184 0V188H112V68h108v17.66a44 44 0 0 0 0 84.68" />
      </G>
    </Svg>
  );
};