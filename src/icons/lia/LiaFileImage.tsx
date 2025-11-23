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

export const LiaFileImage = (props: IconProps) => {
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
        <Path d="M6 3v26h20V9.594l-.281-.313-6-6L19.406 3Zm2 2h10v6h6v16H8Zm12 1.438L22.563 9H20ZM21.094 14c-.551 0-1 .45-1 1s.449 1 1 1 1-.45 1-1-.45-1-1-1M14 15.594l-.719.687-4 4 1.438 1.438L14 18.437l2.281 2.282.719.687.719-.687L19 19.437l2.281 2.282 1.438-1.438-3-3-.719-.687-.719.687L17 18.563l-2.281-2.282Z" />
      </G>
    </Svg>
  );
};