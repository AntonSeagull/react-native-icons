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

export const LiaStarOfDavidSolid = (props: IconProps) => {
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
        <Path d="m16 2.063-.844 1.406L11.781 9H3.313l.906 1.531L7.53 16 4.22 21.469 3.312 23h8.47l3.374 5.531.844 1.407.844-1.407L20.219 23h8.562l-.937-1.531L24.5 16l3.344-5.469L28.78 9H20.22l-3.375-5.531Zm0 3.843L17.875 9h-3.75ZM6.875 11h3.719l-1.875 3.063Zm6.031 0h6.219l3.031 5-3.031 5h-6.219l-3-5Zm8.532 0h3.78l-1.874 3.094Zm1.906 6.906L25.219 21h-3.782Zm-14.625.032L10.594 21H6.875ZM14.125 23h3.75L16 26.094Z" />
      </G>
    </Svg>
  );
};