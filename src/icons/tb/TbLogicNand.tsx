

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLogicNand = (props: IconProps) => {

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
          <Path d="M22 12h-3" />
          <Path d="M2 9h3" />
          <Path d="M2 15h3" />
          <Path d="M7 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2z" />
          <Path d="M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        </G>
      </Svg>
    );
  }

