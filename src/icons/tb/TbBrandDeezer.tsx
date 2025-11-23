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

export const TbBrandDeezer = (props: IconProps) => {
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
        <Path d="M3 16.5h2v.5H3zM8 16.5h2.5v.5H8zM16 17h-2.5v-.5H16zM21.5 17H19v-.5h2.5zM21.5 13H19v.5h2.5zM21.5 9.5H19v.5h2.5zM21.5 6H19v.5h2.5zM16 13h-2.5v.5H16zM8 13.5h2.5V13H8zM8 9.5h2.5v.5H8z" />
      </G>
    </Svg>
  );
};