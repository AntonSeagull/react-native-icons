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

export const ImeDown = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12 11V5h-1v6H8.5l3 3 3-3zM5 4v3H2V4zm1-1H1v5h5zM1 10h1.5v1H1zM3 10h1.5v1H3zM5 10h1v1.5H5zM1 13.5h1V15H1zM2.5 14H4v1H2.5zM4.5 14H6v1H4.5zM1 11.5h1V13H1zM5 12h1v1.5H5z" />
      </G>
    </Svg>
  );
};