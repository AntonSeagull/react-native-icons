

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiViewTimeline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M18.436,20.94H5.562a2.5,2.5,0,0,1-2.5-2.5V5.567a2.5,2.5,0,0,1,2.5-2.5H18.436a2.5,2.5,0,0,1,2.5,2.5V18.44A2.5,2.5,0,0,1,18.436,20.94ZM5.562,4.067a1.5,1.5,0,0,0-1.5,1.5V18.44a1.5,1.5,0,0,0,1.5,1.5H18.436a1.5,1.5,0,0,0,1.5-1.5V5.567a1.5,1.5,0,0,0-1.5-1.5Z" />
          <Path d="M6.544,8.287h0a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z" />
          <Path d="M9.271,12.5h0a.5.5,0,0,1,0-1h5.454a.5.5,0,0,1,0,1Z" />
          <Path d="M12,16.724h0a.5.5,0,0,1,0-1h5.455a.5.5,0,0,1,0,1Z" />
        </G>
      </Svg>
    );
  }

