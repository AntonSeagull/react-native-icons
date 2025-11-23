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

export const Imboard = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 18 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 9, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M17 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1m-7 2h2v2h-2zm3 3v2h-2V7zM7 4h2v2H7zm3 3v2H8V7zM4 4h2v2H4zm3 3v2H5V7zM2 4h1v2H2zm0 3h2v2H2zm1 5H2v-2h1zm9 0H4v-2h8zm4 0h-3v-2h3zm0-3h-2V7h2zm0-3h-3V4h3z" />
      </G>
    </Svg>
  );
};