

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiJerusalemCross = (props: IconProps) => {

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
          <Path d="M352 23v18h-78v197h197v-78h18v192h-18v-78H274v197h78v18H160v-18h78V274H41v78H23V160h18v78h197V41h-78V23zm41 41v55h55v18h-55v55h-18v-55h-55v-18h55V64zm-256 0v55h55v18h-55v55h-18v-55H64v-18h55V64zm256 256v55h55v18h-55v55h-18v-55h-55v-18h55v-55zm-256 0v55h55v18h-55v55h-18v-55H64v-18h55v-55z" fill="#000" />
        </G>
      </Svg>
    );
  }

