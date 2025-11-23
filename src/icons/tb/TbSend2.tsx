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

export const TbSend2 = (props: IconProps) => {
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
        <Path d="M4.698 4.034 21 12 4.698 19.966a.5.5 0 0 1-.546-.124.56.56 0 0 1-.12-.568L6.5 12 4.032 4.726a.56.56 0 0 1 .12-.568.5.5 0 0 1 .546-.124M6.5 12H21" />
      </G>
    </Svg>
  );
};