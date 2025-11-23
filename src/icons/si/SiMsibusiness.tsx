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

export const SiMsibusiness = (props: IconProps) => {
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
        <Path d="m15.215 10.794 3.78 2.416h-2.663l-3.78-2.416zM5.656 8.518l-.438 1.626-.175.65-.652 2.416-.175.65-.437 1.622h1.869l.437-1.622.175-.65.651-2.416.175-.65.438-1.626zm6.06 5.342-.437 1.622h4.947l2.543-1.622zm3.556-5.342-2.548 1.626h7.086l.438-1.626zm6.86 0-.438 1.626-.175.65-.651 2.416-.175.65-.437 1.622h1.869l.437-1.622.175-.65.651-2.416.175-.65L24 8.518zm-20.255 0-.438 1.626-.175.65-.651 2.416-.175.65L0 15.482h1.869l.437-1.622.175-.65.651-2.416.175-.65.438-1.626zm7.536 0-.438 1.626-.175.65-.651 2.416-.175.65-.437 1.622h1.869l.437-1.622.175-.65.651-2.416.175-.65.438-1.626z" />
      </G>
    </Svg>
  );
};