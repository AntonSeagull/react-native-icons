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

export const LiaCloudRainSolid = (props: IconProps) => {
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
        <Path d="M16 4c-3.227 0-6.027 2.258-6.781 5.344a5.11 5.11 0 0 0-2.813 2.687C2.91 11.773 0 14.555 0 18c0 3.309 2.691 6 6 6h2l1-2H6c-2.207 0-4-1.793-4-4a4.003 4.003 0 0 1 4.875-3.906l1 .219.188-.97c.246-1.105 1.144-1.984 2.25-2.25l.656-.155.094-.657C11.422 7.848 13.543 6 16 6a4.99 4.99 0 0 1 4.469 2.75l.375.781.843-.281c.47-.164.895-.25 1.313-.25 2.207 0 4 1.793 4 4 0 .04.004.09 0 .125-.008.066-.023.117-.031.188l-.063.718.657.281A4.003 4.003 0 0 1 26 22h-2.001l1 2h1c3.309 0 6-2.691 6-6a5.98 5.98 0 0 0-3-5.187C28.895 9.593 26.242 7 23 7c-.39 0-.793.04-1.187.125A6.94 6.94 0 0 0 16 4m2 10s-2 2.895-2 4 .895 2 2 2 2-.895 2-2-2-4-2-4m-5 5s-2 2.895-2 4 .895 2 2 2 2-.895 2-2-2-4-2-4m8 3s-2 2.895-2 4 .895 2 2 2 2-.895 2-2-2-4-2-4" />
      </G>
    </Svg>
  );
};