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

export const TbSunWind = (props: IconProps) => {
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
        <Path d="M14.468 10a4 4 0 1 0-5.466 5.46M2 12h1M11 3v1M11 20v1M4.6 5.6l.7.7M17.4 5.6l-.7.7M5.3 17.7l-.7.7M15 13h5a2 2 0 1 0 0-4M12 16h5.9670000000000005A2 2 0 0 1 20 18a2 2 0 0 1-2 2h-.286" />
      </G>
    </Svg>
  );
};