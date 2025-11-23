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

export const LiaHandPointRight = (props: IconProps) => {
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
        <Path d="m14.688 3-.313.281L7.594 10H2v16h16.844c1.41 0 2.64-.996 2.937-2.375L23.438 16H27c1.645 0 3-1.355 3-3s-1.355-3-3-3H16.25l.188-.75c.203-.156.332-.223.625-.625.468-.64.937-1.633.937-2.969C18 4.23 16.71 3 15.094 3Zm.718 2.094c.422.082.594.254.594.562 0 .903-.273 1.461-.531 1.813s-.438.437-.438.437l-.344.188-.124.406-.594 2.25-.313 1.25H27c.566 0 1 .434 1 1s-.434 1-1 1h-5.187l-.188.781-1.781 8.438c-.102.468-.524.781-1 .781H9V11.406ZM4 12h3v12H4Z" />
      </G>
    </Svg>
  );
};