

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNotSubsetOfFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M128,80h31.37L90.83,158.33A48,48,0,0,1,128,80Zm96-32V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM189.27,58a8,8,0,0,0-11.29.75L173.37,64H128A64,64,0,0,0,80.19,170.49L66,186.73a8,8,0,0,0,12,10.54L92.22,181A63.62,63.62,0,0,0,128,192h48a8,8,0,0,0,0-16H128a47.63,47.63,0,0,1-25.13-7.13L190,69.27A8,8,0,0,0,189.27,58Z" />
        </G>
      </Svg>
    );
  }

