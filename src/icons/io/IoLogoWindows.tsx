

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLogoWindows = (props: IconProps) => {

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
          <Path d="M480,265H232V444l248,36V265Z" />
          <Path d="M216,265H32V415l184,26.7V265Z" />
          <Path d="M480,32,232,67.4V249H480V32Z" />
          <Path d="M216,69.7,32,96V249H216V69.7Z" />
        </G>
      </Svg>
    );
  }

