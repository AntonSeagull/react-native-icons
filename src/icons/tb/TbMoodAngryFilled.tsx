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

export const TbMoodAngryFilled = (props: IconProps) => {
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
        <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10 10 0 1 1 0-20m0 12a4.5 4.5 0 0 0-3.214 1.35 1 1 0 1 0 1.428 1.4 2.5 2.5 0 0 1 3.572 0 1 1 0 0 0 1.428-1.4A4.5 4.5 0 0 0 12 14M8.447 8.105a1 1 0 0 0-.894 1.788l2 1a1 1 0 0 0 .894-1.788zm8.447.447a1 1 0 0 0-1.341-.447l-2 1a1 1 0 0 0 .894 1.788l2-1a1 1 0 0 0 .447-1.341" />
      </G>
    </Svg>
  );
};