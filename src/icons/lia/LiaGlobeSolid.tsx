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

export const LiaGlobeSolid = (props: IconProps) => {
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
        <Path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4m0 2c1.969 0 3.797.586 5.344 1.563l-.813.093.188 2-1.063-.469-.875.75.157 2.063 2.156-.687 2.687.874-.687 1.25-1.625-1-1.75.25L18 13.97l-.969 3 1.938 1.593s1.988-.343 2.093-.343c.106 0 .844 1.812.844 1.812l-1.593 5c-1.301.621-2.77.969-4.313.969-.316 0-.629-.035-.937-.062l-1.094-1.907 1.062-4L11 17H7.281l-.968-1.969L9 12.906 13 11l-.594-2.656 1.719-.375.813 1.125 3-.563-.532-2.312-2.218-.157C15.453 6.044 15.727 6 16 6m-1.125.063-1.562.656-.75-.125a10 10 0 0 1 2.312-.532M6.063 16.78l.968 1.125v2.063l1.875 2.062h1.156l2.844 3.5c-3.773-1.222-6.527-4.64-6.844-8.75" />
      </G>
    </Svg>
  );
};