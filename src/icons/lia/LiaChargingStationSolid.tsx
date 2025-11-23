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

export const LiaChargingStationSolid = (props: IconProps) => {
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
        <Path d="M9 5C7.355 5 6 6.355 6 8v19h14v-7h2v4c0 1.645 1.355 3 3 3s3-1.355 3-3V13.813c0-.798-.313-1.532-.875-2.094L22.406 7 21 8.406l2.844 2.844C22.77 11.707 22 12.766 22 14c0 1.645 1.355 3 3 3a2.9 2.9 0 0 0 1-.187V24c0 .566-.434 1-1 1s-1-.434-1-1v-4c0-1.094-.906-2-2-2h-2V8c0-1.645-1.355-3-3-3zm0 2h8c.566 0 1 .434 1 1v17H8V8c0-.566.434-1 1-1m4.09 3.56-2.43 4.88.9.47 1.1.53-1.57 3.12 1.82.88 2.43-4.88-.9-.47-1.1-.53 1.57-3.12zM25 13c.562 0 1 .438 1 1s-.438 1-1 1-1-.438-1-1 .437-1 1-1" />
      </G>
    </Svg>
  );
};