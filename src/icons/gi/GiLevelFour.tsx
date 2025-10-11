

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiLevelFour = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M16 16c48 96 24 120 72 168 0 0 44.864 0 69.53-21.688A135.765 135.765 0 0 0 120.25 256a135.765 135.765 0 0 0 271.5 0 135.765 135.765 0 0 0-36.375-92.906C380.22 183.997 424 184 424 184c48-48 24-72 72-168-96 48-120 24-168 72 0 0 .004 44.6 21.5 69.313a135.765 135.765 0 0 0-186.72-.344C183.987 132.19 184 88 184 88c-48-48-72-24-168-72zm72 312c-48 48-24 72-72 168 96-48 120-24 168-72 0 0 0-48-24-72s-72-24-72-24zm336 0s-48 0-72 24-24 72-24 72c48 48 72 24 168 72-48-96-24-120-72-168z" />
        </G>
      </Svg>
    );
  }

