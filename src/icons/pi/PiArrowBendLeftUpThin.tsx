

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowBendLeftUpThin = (props: IconProps) => {

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
          <Path d="M204,224a4,4,0,0,1-4,4A100.11,100.11,0,0,1,100,128V41.66L58.83,82.83a4,4,0,0,1-5.66-5.66l48-48a4,4,0,0,1,5.66,0l48,48a4,4,0,0,1-5.66,5.66L108,41.66V128a92.1,92.1,0,0,0,92,92A4,4,0,0,1,204,224Z" />
        </G>
      </Svg>
    );
  }

