

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAnchorSimpleLight = (props: IconProps) => {

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
          <Path d="M224,114H200a6,6,0,0,0,0,12h17.8A90.13,90.13,0,0,1,134,209.78V93.4a30,30,0,1,0-12,0V209.78A90.13,90.13,0,0,1,38.2,126H56a6,6,0,0,0,0-12H32a6,6,0,0,0-6,6,102,102,0,0,0,204,0A6,6,0,0,0,224,114ZM110,64a18,18,0,1,1,18,18A18,18,0,0,1,110,64Z" />
        </G>
      </Svg>
    );
  }

