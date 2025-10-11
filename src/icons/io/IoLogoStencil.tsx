

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLogoStencil = (props: IconProps) => {

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
          <Path d="M188.8,334.07H386.13L279.47,448H83.2Z" />
          <Path d="M512,199H106.61L0,313H405.39Z" />
          <Path d="M232.2,64H428.8L322.62,177.93H125.87Z" />
        </G>
      </Svg>
    );
  }

