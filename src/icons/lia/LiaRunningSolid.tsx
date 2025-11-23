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

export const LiaRunningSolid = (props: IconProps) => {
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
        <Path d="M20.219 5a3.08 3.08 0 0 0-3.063 3.063 3.08 3.08 0 0 0 3.063 3.062c1.683 0 3.093-1.383 3.093-3.062 0-1.68-1.41-3.063-3.093-3.063m0 2c.601 0 1.093.465 1.093 1.063s-.492 1.062-1.093 1.062c-.598 0-1.063-.46-1.063-1.062 0-.598.465-1.063 1.063-1.063m-7.282 2a2.16 2.16 0 0 0-1.312.656L8.25 13.312l1.5 1.376 3.344-3.657c.035-.035.082-.058.125-.031l1.594 1.063-2.344 3.25a2.6 2.6 0 0 0 .281 3.343l3.531 3.532L13.375 28h2.25l2.469-4.906a2 2 0 0 0-.375-2.313l-3.532-3.531a.62.62 0 0 1-.062-.781l2.344-3.282.812.532 1.594 2.406c.371.555.988.875 1.656.875H25v-2h-4.469l-1.687-2.562-.125-.157-.157-.125-4.218-2.812A2.08 2.08 0 0 0 12.938 9m-.874 10.531L10.593 21H6v2h4.594c.527 0 1.031-.215 1.406-.594l1.469-1.468Z" />
      </G>
    </Svg>
  );
};