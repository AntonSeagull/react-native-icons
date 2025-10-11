

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoListCircleSharp = (props: IconProps) => {

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
          <Path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM192,335.5a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16v-16a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm0-71a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16v-16a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm0-72a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16v-16a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm176,151H212.67v-32H368Zm0-71H212.67v-32H368Zm0-72H212.67v-32H368Z" />
        </G>
      </Svg>
    );
  }

