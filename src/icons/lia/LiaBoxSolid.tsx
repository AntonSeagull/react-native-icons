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

export const LiaBoxSolid = (props: IconProps) => {
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
        <Path d="m8.5 5-.312.406L5 9.656V27h22V9.656l-3.187-4.25L23.5 5Zm1 2H15v2H8ZM17 7h5.5L24 9h-7ZM7 11h18v14H7Zm5.813 2c-.551.05-.958.543-.907 1.094.051.55.543.957 1.094.906h6c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496h-6.188" />
      </G>
    </Svg>
  );
};