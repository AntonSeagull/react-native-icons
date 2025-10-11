

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFileVueBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M87.3,156l-20,56a12,12,0,0,1-22.6,0l-20-56A12,12,0,0,1,47.3,148L56,172.32,64.7,148A12,12,0,0,1,87.3,156ZM212,196H192v-4h12a12,12,0,0,0,0-24H192v-4h20a12,12,0,0,0,0-24H180a12,12,0,0,0-12,12v56a12,12,0,0,0,12,12h32a12,12,0,0,0,0-24Zm-68-56a12,12,0,0,0-12,12v38a6,6,0,0,1-12,0V152a12,12,0,0,0-24,0v38a30,30,0,0,0,60,0V152A12,12,0,0,0,144,140ZM36,108V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88v20a12,12,0,0,1-24,0v-4H148a12,12,0,0,1-12-12V44H60v64a12,12,0,0,1-24,0ZM160,80h23L160,57Z" />
        </G>
      </Svg>
    );
  }

