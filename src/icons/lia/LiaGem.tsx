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

export const LiaGem = (props: IconProps) => {
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
        <Path d="M9.531 6 4.22 12.375l-.5.594.5.656 11 14 .781 1 .781-1 11-14 .5-.656-.5-.594L22.47 6Zm.938 2h3.656l-2.687 4H7.125Zm7.406 0h3.656l3.344 4h-4.312ZM16 8.844 18.125 12h-4.25ZM7.031 14h4.219l2.375 8.406Zm6.282 0h5.343L16 23.313Zm7.437 0h4.219l-6.594 8.375Z" />
      </G>
    </Svg>
  );
};