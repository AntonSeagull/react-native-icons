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

export const LiaFileCodeSolid = (props: IconProps) => {
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
        <Path d="M6 3v26h20V9.594l-.281-.313-6-6L19.406 3Zm2 2h10v6h6v16H8Zm12 1.438L22.563 9H20ZM16 13l-2 12h2l2-12Zm-3.781 2.375-2.5 3-.531.625.53.625 2.5 3 1.563-1.25L11.812 19l1.97-2.375Zm7.562 0-1.562 1.25L20.187 19l-1.968 2.375 1.562 1.25 2.5-3 .532-.625-.532-.625Z" />
      </G>
    </Svg>
  );
};