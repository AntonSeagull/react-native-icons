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

export const GoMoon = (props: IconProps) => {
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
        <Path d="M14.768 3.96zl-.002-.005a9 9 0 0 0-.218-.779c-.13-.394.21-.8.602-.67q.435.144.855.328l.01.005A10.002 10.002 0 0 1 12 22a10 10 0 0 1-9.162-5.985l-.004-.01a10 10 0 0 1-.329-.855c-.13-.392.277-.732.67-.602q.386.126.78.218l.004.002A9 9 0 0 0 14.999 6a9 9 0 0 0-.231-2.04M16.5 6c0 5.799-4.701 10.5-10.5 10.5q-.64 0-1.26-.075A8.5 8.5 0 1 0 16.425 4.74q.075.62.075 1.259Z" />
      </G>
    </Svg>
  );
};