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

export const CiBitcoin = (props: IconProps) => {
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
        <Path d="M12 21.934A9.934 9.934 0 1 1 21.934 12 9.945 9.945 0 0 1 12 21.934m0-18.868A8.934 8.934 0 1 0 20.934 12 8.944 8.944 0 0 0 12 3.066" />
        <Path d="M14.28 11.78a1.994 1.994 0 0 0-1.53-3.28h-.25V7.47A.49.49 0 0 0 12 7a.483.483 0 0 0-.5.47V8.5h-1.25a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1.25v1.03a.483.483 0 0 0 .5.47.49.49 0 0 0 .5-.47V15.5h.75a2.006 2.006 0 0 0 2-2 2.03 2.03 0 0 0-.97-1.72M10.25 9.5h2.5a1 1 0 0 1 0 2h-2.5Zm3 5h-3v-2h3a1 1 0 0 1 0 2" />
      </G>
    </Svg>
  );
};