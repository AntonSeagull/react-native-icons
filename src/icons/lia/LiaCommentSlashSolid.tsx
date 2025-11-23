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

export const LiaCommentSlashSolid = (props: IconProps) => {
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
        <Path d="M3.707 2.293 2.293 3.707l26 26 1.414-1.414L27.414 26H29V6H7.414zM3 7.243V26h9.586L16 29.414 19.414 26h2.344l-2-2h-1.172L16 26.586 13.414 24H5V9.242zM9.414 8H27v16h-1.586z" />
      </G>
    </Svg>
  );
};