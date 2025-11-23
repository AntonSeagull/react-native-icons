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

export const TbPanoramaHorizontal = (props: IconProps) => {
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
        <Path d="M4.338 5.53q7.658 2.898 15.317 0A1 1 0 0 1 21 6.464v11c0 .692-.692 1.2-1.34.962q-7.66-2.898-15.321 0A.993.993 0 0 1 3 17.491V6.464a1 1 0 0 1 1.338-.935z" />
      </G>
    </Svg>
  );
};