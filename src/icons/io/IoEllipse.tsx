

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoEllipse = (props: IconProps) => {

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
          <Path d="M256,464C141.31,464,48,370.69,48,256S141.31,48,256,48s208,93.31,208,208S370.69,464,256,464Z" />
        </G>
      </Svg>
    );
  }

