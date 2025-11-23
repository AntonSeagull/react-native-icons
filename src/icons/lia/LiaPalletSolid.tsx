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

export const LiaPalletSolid = (props: IconProps) => {
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
        <Path d="M6.125 5 6 5.844l-2 14V27h6v-2h12v2h6v-7.156l-2-14L25.875 5Zm1.75 2h2.063l-.876 12H6.156Zm4.063 0H15v12h-3.937ZM17 7h3.063l.875 12H17Zm5.063 0h2.062l1.719 12h-2.907ZM6 21h20v4h-2v-2H8v2H6Z" />
      </G>
    </Svg>
  );
};