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

export const LiaSpeakerDeck = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 8c-2.757 0-5 2.243-5 5s2.243 5 5 5h6a1.001 1.001 0 0 1 0 2H5a2 2 0 0 0 0 4h9c2.757 0 5-2.243 5-5s-2.243-5-5-5H8a1.001 1.001 0 0 1 0-2h7a2 2 0 0 0 0-4zm10.445 0c.344.59.555 1.268.555 2 0 .734-.217 1.409-.56 2H24a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3.08a6.98 6.98 0 0 1-2.031 4H25a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4z" />
      </G>
    </Svg>
  );
};