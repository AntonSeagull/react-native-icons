

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandMedium = (props: IconProps) => {

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
          <Path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <Path d="M8 9h1l3 3l3 -3h1" />
          <Path d="M8 15l2 0" />
          <Path d="M14 15l2 0" />
          <Path d="M9 9l0 6" />
          <Path d="M15 9l0 6" />
        </G>
      </Svg>
    );
  }

