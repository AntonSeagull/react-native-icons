

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoTextOutline = (props: IconProps) => {

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
          <Path d="M326,239.5c12.19-28.69,41-48,74-48h0c46,0,80,32,80,80v144" />
          <Path d="M320,358.5c0,36,26.86,58,60,58,54,0,100-27,100-106v-15c-20,0-58,1-92,5C355.23,304.36,320,319.5,320,358.5Z" />
        </G>
      </Svg>
    );
  }

