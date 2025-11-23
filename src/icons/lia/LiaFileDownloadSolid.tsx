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

export const LiaFileDownloadSolid = (props: IconProps) => {
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
        <Path d="M6 3v26h20V9.6l-.3-.3-6-6-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM15 13v5h-3l4 4 4-4h-3v-5zm-3 10v2h8v-2z" />
      </G>
    </Svg>
  );
};