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

export const SiSpaceship = (props: IconProps) => {
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
        <Path d="M12 1.253c1.044 0 1.956.569 2.44 1.412l4.589 7.932 4.45 7.691c.047.074.21.359.27.494a2.808 2.808 0 0 1-3.406 3.836l-7.901-2.606a1.4 1.4 0 0 0-.442-.07 1.4 1.4 0 0 0-.442.07l-7.9 2.606-.162.046a2.8 2.8 0 0 1-.684.083 2.81 2.81 0 0 1-2.644-3.763c.03-.091.074-.176.111-.264.072-.15.161-.288.242-.432l4.449-7.691 4.588-7.932A2.81 2.81 0 0 1 12 1.253" />
      </G>
    </Svg>
  );
};