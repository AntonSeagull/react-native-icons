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

export const GiExpand = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M64 64v128l48-48 48 48 32-32-48-48 48-48zm256 0 48 48-48 48 32 32 48-48 48 48V64zM64 320v128h128l-48-48 48-48-32-32-48 48zm288 0-32 32 48 48-48 48h128V320l-48 48z" />
      </G>
    </Svg>
  );
};