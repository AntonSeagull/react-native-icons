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

export const TbCarouselVerticalFilled = (props: IconProps) => {
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
        <Path d="M18 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M16 19a2 2 0 0 1 1.995 1.85L18 21v1a1 1 0 0 1-1.993.117L16 22v-1H8v1a1 1 0 0 1-1.993.117L6 22v-1a2 2 0 0 1 1.85-1.995L8 19zM17 1a1 1 0 0 1 .993.883L18 2v1a2 2 0 0 1-1.85 1.995L16 5H8a2 2 0 0 1-1.995-1.85L6 3V2a1 1 0 0 1 1.993-.117L8 2v1h8V2a1 1 0 0 1 1-1" />
      </G>
    </Svg>
  );
};