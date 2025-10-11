

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLaptop = (props: IconProps) => {

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
          <Path d="M496,400H467.66A47.92,47.92,0,0,0,480,367.86V128.14A48.2,48.2,0,0,0,431.86,80H80.14A48.2,48.2,0,0,0,32,128.14V367.86A47.92,47.92,0,0,0,44.34,400H16a16,16,0,0,0,0,32H496a16,16,0,0,0,0-32Z" />
        </G>
      </Svg>
    );
  }

