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

export const LiaUniversalAccessSolid = (props: IconProps) => {
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
        <Path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6m0 2a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4m-5.781 4.031L9.78 13.97l4.219.937V19l-.969 4.813 1.938.375 1-5 .031-.094.031.093 1 5 1.938-.375L18 19v-4.094l4.219-.937-.438-1.938L17.5 13h-3Z" />
      </G>
    </Svg>
  );
};