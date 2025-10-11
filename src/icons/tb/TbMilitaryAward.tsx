

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMilitaryAward = (props: IconProps) => {

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
          <Path d="M12 13m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <Path d="M8.5 10.5l-1 -2.5h-5.5l2.48 5.788a2 2 0 0 0 1.84 1.212h2.18" />
          <Path d="M15.5 10.5l1 -2.5h5.5l-2.48 5.788a2 2 0 0 1 -1.84 1.212h-2.18" />
        </G>
      </Svg>
    );
  }

