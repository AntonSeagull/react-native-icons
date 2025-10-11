

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPhosphorLogoDuotone = (props: IconProps) => {

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
          <Path d="M216,104a64,64,0,0,1-64,64h-8V40h8A64,64,0,0,1,216,104ZM72,168h72L72,40Z" />
          <Path d="M152,32H72a8,8,0,0,0-8,8V168a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V176a72,72,0,0,0,0-144ZM80,70.54,130.32,160H80Zm56,161A64.14,64.14,0,0,1,80.51,176H136Zm0-94L85.68,48H136ZM152,160V48a56,56,0,0,1,0,112Z" />
        </G>
      </Svg>
    );
  }

