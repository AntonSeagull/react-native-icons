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

export const LiaSortAlphaDownAltSolid = (props: IconProps) => {
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
        <Path d="M5 5v2h5.563L5.28 12.281 5 12.594V15h8v-2H7.438l5.28-5.281.282-.313V5Zm17 0v18.688l-2.594-2.594L18 22.5l4.281 4.313.719.687.719-.687L28 22.5l-1.406-1.406L24 23.687V5ZM8.188 17l-.22.656L6.032 23H6v.063l-.937 2.593-.063.157V27h2v-.844L7.406 25h3.188L11 26.156V27h2v-1.187l-.062-.157L12 23.063V23h-.031l-1.938-5.344L9.812 17ZM9 20.656 9.844 23H8.156Z" />
      </G>
    </Svg>
  );
};