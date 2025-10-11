

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFlagBannerLight = (props: IconProps) => {

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
          <Path d="M237.07,52.8A6,6,0,0,0,232,50H40a6,6,0,0,0-4.24,10.24L79.51,104,35.76,147.76A6,6,0,0,0,40,158H176.78l-30.2,63.42a6,6,0,0,0,10.84,5.16l80-168A6,6,0,0,0,237.07,52.8ZM182.5,146h-128l37.75-37.76a6,6,0,0,0,0-8.48L54.49,62h168Z" />
        </G>
      </Svg>
    );
  }

