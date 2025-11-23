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

export const TiContacts = (props: IconProps) => {
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
        <Path d="M19 3H8C6.346 3 5 4.346 5 6v1H4a1 1 0 1 0 0 2h1v2H4a1 1 0 1 0 0 2h1v2H4a1 1 0 1 0 0 2h1v1c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3M7 6c0-.551.449-1 1-1v2H7zm0 3h1v2H7zm0 4h1v2H7zm0 5v-1h1v2c-.551 0-1-.449-1-1m13 0c0 .551-.449 1-1 1H9V5h10c.551 0 1 .449 1 1z" />
        <Circle cx={14} cy={10.5} r={2} />
        <Path d="M14 13.356c-1.562 0-2.5.715-2.5 1.429 0 .357.938.715 2.5.715 1.466 0 2.5-.357 2.5-.715 0-.714-.98-1.429-2.5-1.429" />
      </G>
    </Svg>
  );
};