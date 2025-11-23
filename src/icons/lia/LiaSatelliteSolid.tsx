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

export const LiaSatelliteSolid = (props: IconProps) => {
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
        <Path d="m8.875 3.594-.719.687-3.844 3.875-.718.719.719.688 5.75 5.78-.657.657L16 22.594l.656-.657 5.75 5.782.719.687.719-.687 3.875-3.907.718-.687-6.78-6.781c.616-1.66.265-3.61-1.063-4.938-.907-.906-2.117-1.344-3.313-1.344-.554 0-1.101.122-1.625.313L9.594 4.281Zm0 2.812 5.063 5.063-2.47 2.469-5.062-5.063Zm8.406 5.625c.68 0 1.383.258 1.907.781a2.67 2.67 0 0 1 0 3.782l-2.907 2.875-.281.281L12.25 16l3.031-3.031.125-.156c.07-.07.145-.126.219-.188l.188-.156c.44-.293.96-.438 1.468-.438M8.438 17 7 18.406 13.594 25 15 23.563Zm12.093 1.063 5.063 5.062-2.469 2.469-5.062-5.063Z" />
      </G>
    </Svg>
  );
};