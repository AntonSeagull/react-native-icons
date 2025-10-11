

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiQueueLight = (props: IconProps) => {

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
          <Path d="M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm102,58H40a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Zm0,64H40a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Zm110-26a6,6,0,0,1-2.82,5.09l-64,40A6,6,0,0,1,170,200V120a6,6,0,0,1,9.18-5.09l64,40A6,6,0,0,1,246,160Zm-17.32,0L182,130.83v58.34Z" />
        </G>
      </Svg>
    );
  }

