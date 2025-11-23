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

export const TbPlantOff = (props: IconProps) => {
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
        <Path d="M17 17v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4h8M11.9 7.908a6 6 0 0 0-4.79-4.806M3 3v2a6 6 0 0 0 6 6h2M12.531 8.528A6 6 0 0 1 18 5h3v1a6 6 0 0 1-5.037 5.923M12 15v-3M3 3l18 18" />
      </G>
    </Svg>
  );
};