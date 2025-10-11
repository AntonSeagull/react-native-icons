

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBluetoothSharp = (props: IconProps) => {

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
          <Path d="M397.41,161.13,236-.28v212.8L141.83,131.8l-26,30.37L225.27,256,115.8,349.83l26,30.37L236,299.48v212.8L397.41,350.87,286.73,256ZM276,96.28l62.59,62.59L276,212.52Zm62.58,256.85L276,415.72V299.48Z" />
        </G>
      </Svg>
    );
  }

