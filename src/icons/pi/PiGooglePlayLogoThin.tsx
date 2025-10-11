

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGooglePlayLogoThin = (props: IconProps) => {

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
          <Path d="M237.89,117.69,70.05,21.62a12,12,0,0,0-12.13,0A11.69,11.69,0,0,0,52,31.87V224.13a11.69,11.69,0,0,0,5.92,10.21,12,12,0,0,0,12.13,0l167.77-96a11.76,11.76,0,0,0,.07-20.66Zm-52.44-20.8L160,122.34,66.4,28.75ZM60,222.33V33.67L154.34,128Zm6.4,4.92L160,133.66l25.45,25.45Zm167.51-95.88L192.65,155l-27-27,27-27L234,124.66a3.77,3.77,0,0,1-.07,6.71Z" />
        </G>
      </Svg>
    );
  }

