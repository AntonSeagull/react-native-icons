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

export const PiPeaceThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m92 100a91.44 91.44 0 0 1-14.44 49.43L132 125.92V36.09A92.11 92.11 0 0 1 220 128m-96-91.91v89.83l-73.56 51.51A92 92 0 0 1 124 36.09M55 184l69-48.29v84.23A91.94 91.94 0 0 1 55 184m77 35.94v-84.26L201 184a91.94 91.94 0 0 1-69 35.91Z" />
      </G>
    </Svg>
  );
};