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

export const LiaHardHatSolid = (props: IconProps) => {
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
        <Path d="M13 7v1.406c-4.965 1.281-8.59 5.676-8.875 10.969C2.953 19.785 2 20.695 2 22v3h28v-3c0-1.305-.953-2.215-2.125-2.625-.285-5.293-3.91-9.687-8.875-10.969V7Zm2.031 2H17q-.03.171 0 .344V15h2v-4.5c3.738 1.18 6.566 4.473 6.969 8.5H24v2h3c.566 0 1 .434 1 1v1H4v-1c0-.566.434-1 1-1h3v-2H6.031c.403-4.027 3.23-7.32 6.969-8.5V15h2V9.5c.05-.16.063-.332.031-.5" />
      </G>
    </Svg>
  );
};