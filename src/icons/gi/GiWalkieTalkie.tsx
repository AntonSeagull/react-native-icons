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

export const GiWalkieTalkie = (props: IconProps) => {
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
        <Path d="M71 32v135h18V32zm256 0v135h18V32zm-208 95.604V167h18v-39.396zm256 0V167h18v-39.396zM57 185v99.27l16 16V487h110V300.27l16-16V185zm256 0v99.27l16 16V487h110V300.27l16-16V185zm-96 7v80h16.432v-80zm256 0v80h16.432v-80zm-393 7h96v18H80zm256 0h96v18h-96zM80 231h96v18H80zm256 0h96v18h-96zM80 263h96v18H80zm256 0h96v18h-96zm-224 41a24 24 0 0 1 24 24 24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 24-24m256 0a24 24 0 0 1 24 24 24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 24-24" />
      </G>
    </Svg>
  );
};