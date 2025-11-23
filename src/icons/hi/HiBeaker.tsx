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

export const HiBeaker = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M7 2a1 1 0 0 0-.707 1.707L7 4.414v3.758a1 1 0 0 1-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0 1 13 8.172V4.414l.707-.707A1 1 0 0 0 13 2zm2 6.172V4h2v4.172a3 3 0 0 0 .879 2.12l1.027 1.028a4 4 0 0 0-2.171.102l-.47.156a4 4 0 0 1-2.53 0l-.563-.187-.114-.035 1.063-1.063A3 3 0 0 0 9 8.172" clipRule="evenodd" />
      </G>
    </Svg>
  );
};