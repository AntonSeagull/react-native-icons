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

export const LiaSpaceShuttleSolid = (props: IconProps) => {
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
        <Path d="M2 4v6H0v3h1v6H0v3h2v6h4.563c2.457 0 4.824-.98 6.562-2.719l4.344-4.312 8.031-.688a8.45 8.45 0 0 0 6.344-3.718l.343-.563-.343-.562a8.45 8.45 0 0 0-6.344-3.72l-8.031-.687-4.188-4.187-.156-.125A9.3 9.3 0 0 0 6.563 4Zm2 2h2.563a7.3 7.3 0 0 1 5.156 2.125L14.563 11H10v2h7l8.313.688c1.687.14 3.152 1.05 4.25 2.312-1.098 1.262-2.563 2.172-4.25 2.313L16.906 19H10v2h4.563l-2.844 2.875A7.3 7.3 0 0 1 6.563 26H4v-7H3v-6h1Zm20 9v2h2v-2ZM6 21v3h2v-3Z" />
      </G>
    </Svg>
  );
};