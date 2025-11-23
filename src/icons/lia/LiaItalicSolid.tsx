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

export const LiaItalicSolid = (props: IconProps) => {
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
        <Path d="m11.75 5-.062.938-.188 3L11.438 10h2l-.876 12h-2l-.062.938-.187 3L10.219 27H20.25l.063-.937.187-3L20.563 22h-2l.875-12h2l.062-.937.188-3L21.78 5Zm1.875 2h6l-.062 1h-2l-.063.938-1 14L16.438 24h2l-.063 1h-6l.063-1h2l.062-.937 1-14L15.563 8h-2Z" />
      </G>
    </Svg>
  );
};