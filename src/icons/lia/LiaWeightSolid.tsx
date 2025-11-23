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

export const LiaWeightSolid = (props: IconProps) => {
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
        <Path d="M4 6v20h24V6Zm2 2h20v16H6Zm10 2c-4.332 0-7.562 2.156-7.562 2.156l-.782.531.5.813 3 5 .281.5h9.126l.28-.5 3-5 .5-.812-.78-.532S20.332 10 16 10m0 2c2.824 0 4.688.906 5.594 1.406L19.469 17h-1.844l1.281-2.562-1.812-.876L15.375 17h-2.844l-2.125-3.594C11.312 12.906 13.176 12 16 12" />
      </G>
    </Svg>
  );
};