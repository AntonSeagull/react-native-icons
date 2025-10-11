

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcBrokenLink = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M17.5,27c-1.1,1.2-2.7,2-4.5,2h-3c-3.3,0-6-2.7-6-6s2.7-6,6-6h3c1.8,0,3.4,0.8,4.5,2h4.7 c-1.5-3.5-5.1-6-9.2-6h-3C4.5,13,0,17.5,0,23s4.5,10,10,10h3c4.1,0,7.6-2.5,9.2-6H17.5z" />
          <Path d="M38,13h-3c-4.1,0-7.6,2.5-9.2,6h4.7c1.1-1.2,2.7-2,4.5-2h3c3.3,0,6,2.7,6,6s-2.7,6-6,6h-3 c-1.8,0-3.4-0.8-4.5-2h-4.7c1.5,3.5,5.1,6,9.2,6h3c5.5,0,10-4.5,10-10S43.5,13,38,13z" />
        </G>
      </Svg>
    );
  }

