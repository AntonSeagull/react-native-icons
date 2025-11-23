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

export const TbBrandZapier = (props: IconProps) => {
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
        <Path d="M3 12h6M21 12h-6M12 3v6M12 15v6M5.636 5.636l4.243 4.243M18.364 18.364l-4.243-4.243M18.364 5.636l-4.243 4.243M9.879 14.121l-4.243 4.243" />
      </G>
    </Svg>
  );
};