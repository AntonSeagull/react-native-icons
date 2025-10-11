

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDiamonds = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M10.831 20.413l-5.375 -6.91c-.608 -.783 -.608 -2.223 0 -3l5.375 -6.911a1.457 1.457 0 0 1 2.338 0l5.375 6.91c.608 .783 .608 2.223 0 3l-5.375 6.911a1.457 1.457 0 0 1 -2.338 0z" />
        </G>
      </Svg>
    );
  }

