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

export const SiTaipy = (props: IconProps) => {
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
        <Path d="M1.273 4.153a.97.97 0 0 1 .917-.65h21.325a.486.486 0 0 1 .458.646l-1.245 3.56a.97.97 0 0 1-.917.65H.486a.486.486 0 0 1-.459-.646Zm4.855 6.07a.97.97 0 0 1 .917-.65h8.337a.486.486 0 0 1 .458.645l-1.245 3.56a.97.97 0 0 1-.917.65H5.341a.486.486 0 0 1-.458-.646Zm2.698 6.068a.97.97 0 0 1 .917-.65h3.482a.486.486 0 0 1 .458.646l-1.246 3.56a.97.97 0 0 1-.916.65H8.039a.486.486 0 0 1-.458-.646Z" />
      </G>
    </Svg>
  );
};