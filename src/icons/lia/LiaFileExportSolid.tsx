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

export const LiaFileExportSolid = (props: IconProps) => {
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
        <Path d="M6 4v24h20v-8l-2 2v4H8V6h16v4l2 2V4Zm16.406 7L21 12.406 23.563 15h-9.657v2h9.657L21 19.594 22.406 21l4.313-4.281.687-.719-.687-.719Z" />
      </G>
    </Svg>
  );
};