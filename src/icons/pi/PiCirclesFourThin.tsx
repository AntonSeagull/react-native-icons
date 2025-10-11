

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCirclesFourThin = (props: IconProps) => {

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
          <Path d="M80,44a36,36,0,1,0,36,36A36,36,0,0,0,80,44Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,80,108Zm96,8a36,36,0,1,0-36-36A36,36,0,0,0,176,116Zm0-64a28,28,0,1,1-28,28A28,28,0,0,1,176,52ZM80,140a36,36,0,1,0,36,36A36,36,0,0,0,80,140Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,80,204Zm96-64a36,36,0,1,0,36,36A36,36,0,0,0,176,140Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,176,204Z" />
        </G>
      </Svg>
    );
  }

