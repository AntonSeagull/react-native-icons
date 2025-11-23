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

export const TiMediaPlayOutline = (props: IconProps) => {
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
        <Path d="m8.998 7.002.085.078L14.134 12l-5.096 4.964L9 17zM9 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2c.543 0 1.033-.218 1.393-.568L17 12l-6.604-6.433A2 2 0 0 0 9 5" />
      </G>
    </Svg>
  );
};