

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiRssSimpleBold = (props: IconProps) => {

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
          <Path d="M228,192a12,12,0,0,1-24,0c0-77.2-62.8-140-140-140a12,12,0,0,1,0-24C154.43,28,228,101.57,228,192ZM64,100a12,12,0,0,0,0,24,68.07,68.07,0,0,1,68,68,12,12,0,0,0,24,0A92.1,92.1,0,0,0,64,100Zm4,72a16,16,0,1,0,16,16A16,16,0,0,0,68,172Z" />
        </G>
      </Svg>
    );
  }

