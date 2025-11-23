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

export const TbCarambola = (props: IconProps) => {
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
        <Path d="M17.286 21.09q-1.69.001-5.288-2.615-3.596 2.617-5.288 2.616-2.726 0-.495-6.8-9.389-6.775 2.135-6.775h.076Q10.211 2 12 2q1.785 0 3.574 5.516h.076q11.525 0 2.133 6.774 2.23 6.802-.497 6.8" />
      </G>
    </Svg>
  );
};