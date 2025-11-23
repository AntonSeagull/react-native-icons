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

export const LiaStackOverflow = (props: IconProps) => {
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
        <Path d="m19.594 2.844-1.625 1.125 5.593 8.219 1.625-1.126ZM15.375 6.53l-1.312 1.5 7.5 6.5 1.312-1.5Zm-3 4.375-.906 1.781 8.844 4.5.906-1.78Zm-1.719 4.531-.437 1.938 9.656 2.281.438-1.937ZM6 18v11h18V18h-2v9H8v-9Zm4.094 1.688-.125 2 9.906.562.125-2ZM10 23v2h9.938v-2Z" />
      </G>
    </Svg>
  );
};