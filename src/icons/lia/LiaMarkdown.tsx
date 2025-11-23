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

export const LiaMarkdown = (props: IconProps) => {
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
        <Path d="M2.875 6C1.32 6 0 7.254 0 8.813v14.375C0 24.746 1.32 26 2.875 26h26.25C30.68 26 32 24.746 32 23.188V8.813C32 7.252 30.68 6 29.125 6Zm0 2h26.25c.516 0 .875.383.875.813v14.375c0 .43-.36.812-.875.812H2.875C2.359 24 2 23.617 2 23.188V8.813c0-.43.36-.813.875-.813M5 11v10h3v-6.656l3 3.969 3-3.97V21h3V11h-3l-3 4-3-4Zm17 0v5h-3l4.5 5 4.5-5h-3v-5Z" />
      </G>
    </Svg>
  );
};