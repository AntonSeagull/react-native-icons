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

export const LiaWonSignSolid = (props: IconProps) => {
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
        <Path d="m4 6 1.813 6H4v2h2.406L7 16H4v2h3.594L10 26h2l2-8h4l2 8h2l2.406-8H28v-2h-3l.594-2H28v-2h-1.812L28 6h-2l-1.812 6H18.5L17 6h-2l-1.5 6H7.813L6 6Zm12 4 .5 2h-1Zm-7.594 4H13l-.5 2H9ZM15 14h2l.5 2h-3Zm4 0h4.594L23 16h-3.5Zm-9.406 4H12l-1.094 4.375ZM20 18h2.406l-1.312 4.375Z" />
      </G>
    </Svg>
  );
};