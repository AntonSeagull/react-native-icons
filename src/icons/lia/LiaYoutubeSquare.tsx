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

export const LiaYoutubeSquare = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5zm2 2h18v18H7zm9 4.08s-4.39 0-5.47.29c-.6.17-1.08.64-1.24 1.25C9 13.71 9 16.01 9 16.01s0 2.3.29 3.4c.16.6.64 1.06 1.24 1.22 1.08.29 5.47.29 5.47.29s4.39 0 5.47-.29c.6-.17 1.08-.62 1.24-1.23.29-1.09.29-3.39.29-3.39s0-2.29-.29-3.39c-.16-.61-.64-1.08-1.24-1.25-1.08-.29-5.47-.29-5.47-.29m-2 2.076 5 2.856-5 2.842z" />
      </G>
    </Svg>
  );
};