

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoSnowOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M313.72,80A111.47,111.47,0,0,1,256,96a111.47,111.47,0,0,1-57.72-16" />
          <Path d="M198.28,432a112.11,112.11,0,0,1,115.44,0" />
          <Path d="M437.27,218a112.09,112.09,0,0,1-57.71-100" />
          <Path d="M74.73,294a112.09,112.09,0,0,1,57.71,100" />
          <Path d="M74.73,218a112.09,112.09,0,0,0,57.71-100" />
          <Path d="M437.27,294a112.09,112.09,0,0,0-57.71,100" />
        </G>
      </Svg>
    );
  }

