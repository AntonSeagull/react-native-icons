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

export const SiLinksys = (props: IconProps) => {
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
        <Path d="M19.871 0a3.082 3.082 0 1 0 0 6.164 3.082 3.082 0 0 0 0-6.164M1.047.488V24h21.31v-3.469H5.167V.488Zm7.156 0v17.156h14.154v-3.47H12.318V.487Z" />
      </G>
    </Svg>
  );
};