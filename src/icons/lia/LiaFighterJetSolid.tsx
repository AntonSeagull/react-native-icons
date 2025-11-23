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

export const LiaFighterJetSolid = (props: IconProps) => {
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
        <Path d="m7.875 4 1 9h-.844l-1.719-2.562-.28-.438h-4.25l.25 1.188L3 16l-.969 4.813L1.781 22h4.25l.282-.437L8.03 19h.844l-1 9h3.531l.313-.281L20.438 19H26c1.156 0 1.895-.672 2.563-1.219.667-.547 1.156-1.093 1.156-1.093l.656-.688-.656-.687s-.489-.547-1.157-1.094C27.896 13.672 27.157 13 26 13h-5.562l-8.72-8.719L11.407 4Zm2.25 2h.438l8.718 8.719.313.281H26c-.05 0 .727.328 1.281.781.137.114.133.114.25.219-.117.105-.113.105-.25.219-.554.453-1.332.781-1.281.781h-6.406l-.313.281L10.563 26h-.438l1-9H6.938l-.282.438L4.938 20h-.72l.75-3.812.063-.188-.062-.187L4.219 12h.718l1.72 2.563.28.437h4.188ZM16 7l2 2h2l1-1-1-1Zm2 16-2 2h4l1-1-1-1Z" />
      </G>
    </Svg>
  );
};