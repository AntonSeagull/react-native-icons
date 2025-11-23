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

export const LiaWineGlassAltSolid = (props: IconProps) => {
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
        <Path d="m8.188 5-.157.781S7 10.488 7 13c0 4.617 3.516 8.43 8 8.938V26h-5v2h12v-2h-5v-4.062c4.484-.508 8-4.32 8-8.938 0-2.516-1.031-7.219-1.031-7.219L23.812 5Zm1.656 2h12.312c.094.488.332 1.719.532 3H11v2h11.938c.03.348.062.723.062 1 0 3.879-3.121 7-7 7s-7-3.121-7-7c0-1.687.668-5.094.844-6" />
      </G>
    </Svg>
  );
};