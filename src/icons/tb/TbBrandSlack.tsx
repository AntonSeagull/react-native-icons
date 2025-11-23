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

export const TbBrandSlack = (props: IconProps) => {
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
        <Path d="M12 12V6a2 2 0 0 1 4 0v6m0-2a2 2 0 1 1 2 2h-6M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1-2 2v-6M12 12v6a2 2 0 0 1-4 0v-6m0 2a2 2 0 1 1-2-2h6M12 12H6a2 2 0 0 1 0-4h6m-2 0a2 2 0 1 1 2-2v6" />
      </G>
    </Svg>
  );
};