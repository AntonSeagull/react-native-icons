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

export const TbSunElectricity = (props: IconProps) => {
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
        <Path d="M8 12a4 4 0 0 0 4 4m0-8a4 4 0 0 0-4 4M3 12h1M12 3v1M12 20v1M5.6 5.6l.7.7M6.3 17.7l-.7.7M20 7l-3 5h4l-3 5" />
      </G>
    </Svg>
  );
};