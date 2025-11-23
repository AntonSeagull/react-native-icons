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

export const TbGlassFull = (props: IconProps) => {
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
        <Path d="M8 21h8M12 15v6M17 3l1 7c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-7z" />
        <Path d="M6 10a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
      </G>
    </Svg>
  );
};