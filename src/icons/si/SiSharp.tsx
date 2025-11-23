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

export const SiSharp = (props: IconProps) => {
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
        <Path d="M14.22.088v5.96l-3.742.502v3.523l3.743-.5v3.573l3.492-.468V9.105L24 8.263l-.463-3.46-5.824.779V.088zM6.288 1.144v5.962L0 7.948l.463 3.462 5.852-.784 3.464-.464V1.146zm3.52 9.719-3.492.467v3.578l-6.183.828.463 3.46 5.824-.779v5.495h3.492V17.95l3.611-.484v-3.523l-3.715.497zm13.73 1.74-5.824.779-3.492.467v9.018h3.492v-5.962l6.287-.84Z" />
      </G>
    </Svg>
  );
};