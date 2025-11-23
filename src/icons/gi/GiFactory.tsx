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

export const GiFactory = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m384 64 .387 256H368l-96-128-16 128-96-128-16 128-96-128-16 128v160h448V64h-32v256h-32V64zM64 352h48v32H64zm80 0h48v32h-48zm80 0h48v32h-48zm80 0h48v32h-48zM64 416h48v32H64zm80 0h48v32h-48zm80 0h48v32h-48zm80 0h48v32h-48z" />
      </G>
    </Svg>
  );
};