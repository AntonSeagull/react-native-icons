

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoChevronUpCircle = (props: IconProps) => {

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
          <Path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48ZM363.31,307.31a16,16,0,0,1-22.62,0L256,222.63l-84.69,84.68a16,16,0,0,1-22.62-22.62l96-96a16,16,0,0,1,22.62,0l96,96A16,16,0,0,1,363.31,307.31Z" />
        </G>
      </Svg>
    );
  }

