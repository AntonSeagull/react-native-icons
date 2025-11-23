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

export const LiaSortAlphaDownSolid = (props: IconProps) => {
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
        <Path d="m8.188 5-.22.656L6.032 11H6v.063l-.937 2.593-.063.156V15h2v-.844L7.406 13h3.188L11 14.156V15h2v-1.187l-.062-.157L12 11.062V11h-.031L10.03 5.656 9.812 5ZM22 5v18.688l-2.594-2.594L18 22.5l4.281 4.313.719.687.719-.687L28 22.5l-1.406-1.406L24 23.687V5ZM9 8.656 9.844 11H8.156ZM5 17v2h5.563L5.28 24.281 5 24.594V27h8v-2H7.438l5.28-5.281.282-.313V17Z" />
      </G>
    </Svg>
  );
};