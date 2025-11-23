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

export const VscZoomIn = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M12.027 6.149a5.52 5.52 0 0 1-1.27 3.908l4.26 4.26-.7.71-4.26-4.27a5.52 5.52 0 1 1 1.97-4.608m-5.45 4.888a4.5 4.5 0 0 0 3.18-1.32l-.04.02a4.5 4.5 0 0 0 1.36-3.2 4.5 4.5 0 1 0-4.5 4.5m2.44-4v-1h-2v-2h-1v2h-2v1h2v2h1v-2z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};