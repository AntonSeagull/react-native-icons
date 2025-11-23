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

export const LiaUserMdSolid = (props: IconProps) => {
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
        <Path d="m8.438 6-.282.469S5 11.652 5 20v1h6.094A5 5 0 0 0 11 22c0 2.75 2.25 5 5 5s5-2.25 5-5c0-.344-.027-.676-.094-1H27v-1c0-4.61-.777-7.988-1.562-10.219-.786-2.23-1.625-3.375-1.625-3.375L23.5 6Zm1.218 2h12.719c.145.207.574.73 1.188 2.469.648 1.84 1.23 4.73 1.343 8.531H20a5.02 5.02 0 0 0-4-2 5.02 5.02 0 0 0-4 2H7.094c.226-6.648 2.23-10.43 2.562-11M15 10v2h-2v2h2v2h2v-2h2v-2h-2v-2Zm1 9c1.668 0 3 1.332 3 3s-1.332 3-3 3-3-1.332-3-3 1.332-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" />
      </G>
    </Svg>
  );
};