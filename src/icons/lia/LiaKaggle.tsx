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

export const LiaKaggle = (props: IconProps) => {
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
        <Path d="M10.352 4Q10 4 10 4.352v23.293q0 .351.352.351h2.296q.353 0 .354-.351v-4.836l1.809-1.723 5.238 6.664q.212.249.496.25h3.172q.249 0 .283-.143l-.066-.359-6.91-8.588 6.626-6.412c.123-.128.08-.498-.252-.498h-3.28q-.25.002-.499.252L13 18.975V4.352Q13 4 12.648 4z" />
      </G>
    </Svg>
  );
};