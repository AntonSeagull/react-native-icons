

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGiftOutline = (props: IconProps) => {

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
          <Path d="M256,104v56h56a56,56,0,1,0-56-56Z" />
          <Path d="M256,104c0,15.46,0,56,0,56H200a56,56,0,1,1,56-56Z" />
          <Path d="M416,272V416a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V272" />
        </G>
      </Svg>
    );
  }

