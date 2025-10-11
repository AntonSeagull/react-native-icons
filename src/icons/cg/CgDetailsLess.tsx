

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgDetailsLess = (props: IconProps) => {

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
          <Path d="M3 9C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H21C21.5523 11 22 10.5523 22 10C22 9.44772 21.5523 9 21 9H3Z" fill="currentColor" />
          <Path d="M3 13C2.44772 13 2 13.4477 2 14C2 14.5523 2.44772 15 3 15H15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13H3Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

